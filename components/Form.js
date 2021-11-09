import React from "react";
import uuid from "react-native-uuid";
import { View, StyleSheet, TextInput, Button } from "react-native";

const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <View>
      <TextInput
        placeholder="Enter anything"
        style={styles.textInput}
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      <Button
        disabled={!inputValue}
        title="Add task"
        onPress={() => {
          addTodo({
            id: uuid.v4(),
            text: inputValue,
          });
          setInputValue("");
        }}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    margin: 15,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
