import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import StarWars from "../components/StarWars";

export default function StarWarsPerson() {
  const [personStarWars, setPersonStarWars] = React.useState([
    { id: 1, text: "2" },
  ]);
  React.useEffect(() => {
    const getPerson = async () => {
      const res = await axios.get("https://swapi.dev/api/people/?page=1");
      setPersonStarWars(res?.data?.results);
    };
    getPerson();
  }, []);

  const renderItem = ({ item }) => <StarWars item={item} />;

  return (
    <View style={styles.container}>
      <Text>Star Wars Person</Text>
      <StatusBar style="auto" />
      <FlatList
        data={personStarWars}
        keyExtractor={(item) => item.creted}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
