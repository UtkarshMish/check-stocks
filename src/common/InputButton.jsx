import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const InputButton = ({
  title,
  width = 250,
  height = 50,
  radius = 25,
  color = "blue",
  fontColor,
  onPress,
  ...params
}) => {
  const styles = StyleSheet.create({
    buttonFonts: {
      fontSize: 24,
      textAlign: "center",
      fontWeight: "bold",
      ...fontColor,
    },
    containerButton: {
      justifyContent: "center",
      backgroundColor: color,
      borderRadius: radius,
      width,
      height,
    },
  });
  return (
    <TouchableOpacity {...params} onPress={onPress}>
      <View style={styles.containerButton}>
        <Text style={styles.buttonFonts}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InputButton;
