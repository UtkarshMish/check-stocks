import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import LogScreen from './src/components/LogScreen';

export default function App()
{
  const colorScheme = useColorScheme();
  const themeStatusBarStyle = colorScheme === 'light' ? 'dark-content' : 'light-content';
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  return (<SafeAreaView style={[styles.container, themeContainerStyle]}>
    <StatusBar barStyle={themeStatusBarStyle} />
    <LogScreen fontColor={themeTextStyle} />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: 'aliceblue',
  },
  darkContainer: {
    backgroundColor: '#122332',
  },
  lightThemeText: {
    color: '#122332',
  },
  darkThemeText: {
    color: 'aliceblue',
  },
});
