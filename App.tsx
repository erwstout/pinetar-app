import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { Button, ThemeProvider } from "react-native-elements";

import Header from "./Header";
import Home from "./Home";

export default function App() {
  return (
    <ThemeProvider>
      <ScrollView>
        <Header />
        <NativeRouter>
          <Route exact path="/" component={Home} />
        </NativeRouter>
      </ScrollView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
