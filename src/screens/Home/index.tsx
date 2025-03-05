import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { homeStyles } from './style';
import Todo from '../../components/Todo';
import { TodoType } from '../../types';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import TodoStatus from '../../components/TodoStatus';

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [todosCompleted, setTodosCompleted] = useState<TodoType[]>([])
  const [description, setDescription] = useState("")

  const handleAddTodo = () => {
    if (description.length === 0 || description.trim() === "") {
      return Alert.alert("Warning", "Type a description to create a task.")
    }

    const newTodo: TodoType = {
      id: uuid.v4(),
      description,
      isCompleted: false
    }
    setTodos(previous => [...previous, newTodo])
    setDescription("")
  }

  const handleDeleteTodo = (id: string) => {
    Alert.alert("Remove", "Do you want to remove this task?",
      [
        {
          text: "No",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            const todoIndex = todos.findIndex(todo => todo.id === id)

            if (todoIndex === -1) return

            const newList = [...todos]

            newList.splice(todoIndex, 1)

            setTodos(newList)

            return Alert.alert("Removed", "You removed this taks from your list.")
          }
        },
      ]
    )
  }

  const handleCompleteTodo = (id: string) => {
    const todo = todos.find(todo => todo.id === id)
    const todoIndex = todos.findIndex(todo => todo.id === id)

    if (!todo || todoIndex === -1) return

    todo.isCompleted = true
    const newList = [...todos]
    newList.splice(todoIndex, 1, todo)

    setTodos(newList.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted)))
  }


  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.flex}>
        <TextInput
          style={homeStyles.input}
          placeholder='What you want to do?'
          placeholderTextColor={"#5E5E5E"}
          onChangeText={text => setDescription(text)}
          value={description}
        />
        <TouchableOpacity style={homeStyles.createButton} onPress={handleAddTodo}><Text style={homeStyles.createButtonText}>+</Text></TouchableOpacity>
      </View>

      <TodoStatus todoQuantity={todos.filter(({ isCompleted }) => !isCompleted).length} completedQuantity={todos.filter(({ isCompleted }) => isCompleted).length} />

      <FlatList
        style={homeStyles.todoList}
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Todo
            key={item.description}
            todo={{ ...item }}
            onRemove={() => handleDeleteTodo(item.id)}
            onComplete={() => handleCompleteTodo(item.id)}
          />
        )}
        ListEmptyComponent={() => (<Text style={homeStyles.emptyTodosText}>You don't have any task to do!</Text>)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
