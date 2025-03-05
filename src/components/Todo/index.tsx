import { Text, TouchableOpacity, View } from "react-native";
import { todoStyles } from "./styles";
import { TodoType } from "../../types";

interface ITodo {
  todo: TodoType,
  onRemove: () => void
  onComplete: () => void
}

export default function Todo({ todo, onRemove, onComplete }: ITodo) {
  const completedStyle = { ...todoStyles.checkbox, ...todoStyles.checkboxCompleted }
  const completedTextStyle = { ...todoStyles.text, ...todoStyles.textCompleted }
  return (
    <View style={todoStyles.container}>
      <View style={todo.isCompleted ? completedStyle : todoStyles.checkbox} onTouchStart={onComplete} />
      <Text style={todo.isCompleted ? completedTextStyle : todoStyles.text}>{todo.description}</Text>
      <TouchableOpacity style={todoStyles.deleteButton}>
        <Text style={todoStyles.deleteButtonText} onPress={onRemove}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
