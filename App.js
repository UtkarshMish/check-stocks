import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import LogScreen from './src/components/LogScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import checkBiometric from "./src/utils/biometric.js";
import HomeScreen from './src/components/HomeScreen';
async function showHome(navigation)
{
  if (await checkBiometric())
    navigation.navigate("Home");
}
function Home({ navigation })
{
  const colorScheme = useColorScheme();
  const themeStatusBarStyle = colorScheme === 'light' ? 'dark-content' : 'light-content';
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  return (
    <SafeAreaView style={[styles.container, themeContainerStyle]}>
      <StatusBar barStyle={themeStatusBarStyle} />
      <LogScreen fontColor={themeTextStyle} handlePress={() => showHome(navigation)} />
    </SafeAreaView>
  )
}
export default function App()
{
  const Stack = createStackNavigator();

  return (

    <NavigationContainer documentTitle={{ enabled: true }}>
      <Stack.Navigator mode={"modal"} headerMode={"none"}>
        <Stack.Screen name="Log Screen" component={Home} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>



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
