import { Text, TouchableOpacity, View } from "react-native";
import { todoStyles } from "./styles";
import { TodoType } from "../../types";

interface ITodo {
  todo: TodoType,
  onRemove: () => void
}

export default function Todo({ todo, onRemove }: ITodo) {
  return (
    <View style={todoStyles.container}>
      <View style={todoStyles.checkbox} />
      <Text style={todoStyles.text}>{todo.description}</Text>
      <TouchableOpacity style={todoStyles.deleteButton}>
        <Text style={todoStyles.deleteButtonText} onPress={onRemove}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
