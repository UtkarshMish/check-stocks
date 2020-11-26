import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import GraphStock from "../../common/GraphStock";

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const { chartOptions } = this.state;
  }

  render() {
    const { chartOptions } = this.state;

    return (
      <View style={styles.container}>
        <GraphStock />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 420,
  },
  stockChart: {
    height: 200,
    width: 200,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
