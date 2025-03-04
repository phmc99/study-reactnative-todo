import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { homeStyles } from './style';
import Todo from '../../components/Todo';

export default function Home() {
  const todos = [{ isCompleted: false, description: "Estudar Ingles" }, { isCompleted: true, description: "Ir a academia" }, { isCompleted: false, description: "Estudar BTC" }, { isCompleted: true, description: "Jiu-jitsu" }]

  const handleAddTodo = () => {
    console.log("Check")
  }

  const handleDeleteTodo = () => {
    console.log("Delete")
  }

  return (
    <View style={homeStyles.container}>
      <Text>To Do</Text>
      <View style={homeStyles.flex}>
        <TextInput style={homeStyles.input} placeholder='What you want to do?' placeholderTextColor={"#5E5E5E"} />
        <TouchableOpacity style={homeStyles.createButton} onPress={handleAddTodo}><Text style={homeStyles.createButtonText}>+</Text></TouchableOpacity>
      </View>
      <ScrollView style={homeStyles.todoList} showsVerticalScrollIndicator={false}>
        {todos.length !== 0 ? (todos.map((todo, index) => (
          <Todo todo={todo} onRemove={handleDeleteTodo} key={todo.description + index} />
        ))) : <Text style={homeStyles.emptyTodosText}>You don't have any task to do!</Text>}
      </ScrollView>
    </View>
  )
}
