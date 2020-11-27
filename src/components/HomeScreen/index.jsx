import { DeviceMotion } from "expo-sensors";
import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet, Appearance } from "react-native";
import MainScreen from "../MainScreen";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceOrientation: 1,
      scheme: null,
    };
  }
  async componentDidMount() {
    this.Orientation = DeviceMotion.addListener(({ orientation }) => {
      if (Math.abs(orientation) == 90) {
        this.setState({ deviceOrientation: 4 });
      } else {
        this.setState({ deviceOrientation: 1 });
      }
    });
    this.colorSubscriber = Appearance.addChangeListener(({ colorScheme }) =>
      this.setState({ scheme: colorScheme })
    );
  }
  async componentWillUnmount() {
    this.Orientation && this.Orientation.remove();
    this.colorSubscriber && this.colorSubscriber.remove();
  }
  render() {
    const { deviceOrientation, scheme } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView
          style={[
            styles.titleContainer,
            { display: deviceOrientation == 1 ? "flex" : "none" },
          ]}
        >
          <Text
            style={[
              styles.mainTitle,
              scheme == "dark" ? styles.textBlack : styles.textWhite,
            ]}
          >
            Stocks price per minute
          </Text>
          <Text
            style={[
              styles.subTitle,
              scheme == "dark" ? styles.subTextBlack : styles.subTextWhite,
            ]}
          >
            using ordinal X axis
          </Text>
        </SafeAreaView>
        <MainScreen theme={this.props.theme} />
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
  },
  textBlack: {
    color: "white",
  },
  textWhite: {
    color: "black",
  },
  subTextBlack: {
    color: "aliceblue",
  },
  subTextWhite: {
    color: "grey",
  },
});
