import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ marginTop: 20 }}>
        <Text> HOME SCREEN </Text>
      </SafeAreaView>
    );
  }
}
