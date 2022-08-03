import React from "react";
import LogIn from "./screen/LogIn";
import Register from "./screen/Register";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    background: "rgb(255, 255, 255)",
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
