import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const InputButton = ({
  title,
  width = 250,
  height = 50,
  radius = 25,
  color = "blue",
  fontColor,
  onPress,
  useIcon,
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
    <TouchableOpacity
      {...params}
      onPress={onPress}
      style={{
        shadowColor: fontColor.color,
        shadowOffset: { height: 8, width: 8 },
        shadowOpacity: 1,
        shadowRadius: 888,
        borderRadius: radius + 1,
        elevation: 15,
      }}
    >
      <View style={styles.containerButton}>
        <Text style={styles.buttonFonts}>
          <Ionicons name={useIcon} size={30} style={fontColor} />
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default InputButton;
