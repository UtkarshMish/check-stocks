import { DefaultTheme, useTheme } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import GraphStock from "../../common/GraphStock";

export default function MainScreen({ style })
{
  const { colors } = useTheme() || DefaultTheme;
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.background, color: colors.text },
        style
      ]}
    >
      <GraphStock colors={colors} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 420,
  },
  stockChart: {
    height: 200,
    width: 200,
    justifyContent: "center",
  },
});
