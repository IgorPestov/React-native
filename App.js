import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Todo from "./screens/Todo";
import StarWarsPerson from "./screens/StarWarsPerson";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarAllowFontScaling:true,
          tabBarLabelStyle:{
            fontSize:32
          },
          tabBarIcon: ({ focused, color, size }) => {},
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Todo" component={Todo} />
        <Tab.Screen name="Star Wars" component={StarWarsPerson} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
