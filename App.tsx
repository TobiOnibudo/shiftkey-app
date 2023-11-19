import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { SafeAreaView } from "react-native";

export default function App() {
  const isAuthenticated = false; // TODO: Manage this dynamically

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {isAuthenticated ? <AuthNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
}
