import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { homeStyles } from './style';

export default function Home() {
  const handleAddTodo = () => {
    console.log("Check")
  }

  return (
    <View style={homeStyles.container}>
      <Text>To Do</Text>
      <View style={homeStyles.flex}>
        <TextInput style={homeStyles.input} placeholder='What you want to do?' />
        <TouchableOpacity style={homeStyles.createButton} onPress={handleAddTodo}><Text style={homeStyles.createButtonText}>+</Text></TouchableOpacity>
      </View>
    </View>
  )
}
