import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import MainScreen from "../MainScreen";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.titleContainer}>
          <Text style={styles.mainTitle}> Stocks price per minute </Text>
          <Text style={styles.subTitle}> using ordinal X axis </Text>
        </SafeAreaView>
        <MainScreen />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    alignSelf: "center",
    width: "100%",
  },
  titleContainer: {
    margin: 50,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
  },
  mainTitle: {
    fontSize: 24,
    fontFamily: "Roboto",
    textAlign: "left",
  },
  subTitle: {
    fontSize: 16,
    textAlign: "right",
    color: "grey",
  },
});
