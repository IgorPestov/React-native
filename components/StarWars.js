import React from "react";
import {
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const StarWars = ({ item }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <TouchableOpacity
      style={styles.starWars}
      onPress={() => setModalVisible(!modalVisible)}
    >
      <Text style={styles.text}>{item.name}</Text>
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        visible={modalVisible}
      >
        <SafeAreaView style={styles.modal}>
          <Text
            style={styles.close}
            onPress={() => setModalVisible(!modalVisible)}
          >
            &times;
          </Text>
          <Text>Name: {item.name}</Text>
          <Text>Gender: {item.gender}</Text>
          <Text>Birth year: {item.birth_year}</Text>
        </SafeAreaView>
      </Modal>
    </TouchableOpacity>
  );
};

export default StarWars;

const styles = StyleSheet.create({
  starWars: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#90EE90",
    margin: 5,
    borderRadius: 5,
  },
  text: { fontSize: 20 },
  modal: {
    margin: 20,
  },
  close: {
    fontSize: 30,
    textAlign: "right",
  },
});
