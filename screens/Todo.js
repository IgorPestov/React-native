import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";
export default function Todo() {
  const [todoItems, setTodoItems ] = React.useState([]);

  
  const renderItem = ({ item }) => (
    <TodoItem item={item} deleteTodo={deleteTodo}/>
  );
  const addTodo = (newItems) => {
    setTodoItems([...todoItems, {...newItems}])
  }
  const deleteTodo= (id)=> {
    setTodoItems(newList => {
      return newList.filter(todoItems => id !== todoItems.id)
    })
  }
   return (
    <SafeAreaView style={styles.container}>
      <Form addTodo={addTodo} />
      <FlatList
        data={todoItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
