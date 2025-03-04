import { Text, TouchableOpacity, View } from "react-native";
import { todoStyles } from "./styles";

interface ITodo {
  todo: {
    isCompleted: boolean,
    description: string
  },
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
