import React, { Component } from 'react'

import {
  FlatList,
  ToastAndroid
} from 'react-native'

import MovimientosService from '../services/MovimientosService'
import Movimiento from './Movimiento'
import { SafeAreaView } from 'react-navigation';

class ListaMovimientos extends Component {

  constructor(props) {
    super(props)
    this.state = { movimientos: [], error: null }
  }

  async componentDidMount() {
    try {
      let data = await MovimientosService.getMovimientos()
      this.setState({
        movimientos: data
      })
    } catch (error) {
      console.log(error)
      ToastAndroid.show(error.description, ToastAndroid.LONG)
    }

  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.movimientos}
          renderItem={({ item }) => <Movimiento data={item}></Movimiento>}>
        </FlatList>
      </SafeAreaView>
    )
  }
}

export default ListaMovimientos
