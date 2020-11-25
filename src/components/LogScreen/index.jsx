import React, { Component } from "react";
import { View } from "react-native";
import * as Google from "expo-google-sign-in";
import InputButton from "../../common/InputButton";
class LogScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    // this.initG();
  }
  async initG() {
    await Google.initAsync({
      clientId: "",
    }),
      this._setUserLogin();
  }
  async _setUserLogin() {
    const user = await Google.signInSilentlyAsync();
    this.setState({ user });
  }

  render() {
    const { fontColor, handlePress } = this.props;
    return (
      <View>
        <InputButton
          title="oogle Sign In"
          color="#FF3333DD"
          fontColor={fontColor}
          useIcon={"logo-google"}
          onPress={handlePress}
        />
      </View>
    );
  }
}

export default LogScreen;
