import { View, Text } from 'react-native'
import { todoStatusStyle } from './styles'
import React from 'react'

interface ITodoStatus {
  todoQuantity: number,
  completedQuantity: number
}

export default function TodoStatus({ todoQuantity, completedQuantity }: ITodoStatus) {
  return (
    <View style={todoStatusStyle.container}>
      <View style={todoStatusStyle.statusContainer}>
        <Text style={todoStatusStyle.createStatusText}>To Do{" "}</Text>
        <View style={todoStatusStyle.quantity}><Text style={todoStatusStyle.quantityText}>{todoQuantity}</Text></View>
      </View>
      <View style={todoStatusStyle.statusContainer}>
        <Text style={todoStatusStyle.completedStatusText}>Completed{" "}</Text>
        <View style={todoStatusStyle.quantity}><Text style={todoStatusStyle.quantityText}>{completedQuantity}</Text></View>
      </View>
    </View>
  )
}