import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { homeStyles } from './style';
import Todo from '../../components/Todo';

export default function Home() {
  const todos = [{ isCompleted: false, description: "Estudar Ingles" }, { isCompleted: true, description: "Ir a academia" }, { isCompleted: false, description: "Estudar BTC" }, { isCompleted: true, description: "Jiu-jitsu" }]

  const handleAddTodo = () => {
    console.log("Check")
  }

  const handleDeleteTodo = () => {
    Alert.alert("Remove", "Do you want to remove this task?",
      [
        {
          text: "No",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => Alert.alert("Removed", "You removed this taks from your list.")
        },
      ]
    )
  }

  return (
    <View style={homeStyles.container}>
      <Text>To Do</Text>
      <View style={homeStyles.flex}>
        <TextInput style={homeStyles.input} placeholder='What you want to do?' placeholderTextColor={"#5E5E5E"} />
        <TouchableOpacity style={homeStyles.createButton} onPress={handleAddTodo}><Text style={homeStyles.createButtonText}>+</Text></TouchableOpacity>
      </View>
      <FlatList
        style={homeStyles.todoList}
        data={todos}
        keyExtractor={item => item.description}
        renderItem={({ item }) => (
          <Todo
            key={item.description}
            todo={{ ...item }}
            onRemove={handleDeleteTodo}
          />
        )}
        ListEmptyComponent={() => (<Text style={homeStyles.emptyTodosText}>You don't have any task to do!</Text>)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
