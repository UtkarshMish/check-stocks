import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import GraphStock from "../../common/GraphStock";
import { DefaultTheme, useTheme } from "@react-navigation/native";

export default function MainScreen({ style })
{
  const { colors } = useTheme() || DefaultTheme;
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.background, color: colors.text },
        style
      ]}
    >
      <GraphStock colors={colors} />
    </SafeAreaView>
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
