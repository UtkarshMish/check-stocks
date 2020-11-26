import React, { Component } from "react";
import { View } from "react-native";
import InputButton from "../../common/InputButton";

class LogScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
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
