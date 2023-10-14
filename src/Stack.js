import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "../src/Screen1";
import Screen2 from "../src/Screen2";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Screen1} />
      <Stack.Screen name="Color" component={Screen2} />
    </Stack.Navigator>
  );
};
export { MainStackNavigator };