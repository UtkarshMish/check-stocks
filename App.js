import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { BackHandler, SafeAreaView, StyleSheet } from 'react-native';
import { useColorScheme, ToastAndroid } from 'react-native';
import LogScreen from './src/components/LogScreen';
import { DarkTheme, DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import checkBiometric from "./src/utils/biometric.js";
import HomeScreen from './src/components/HomeScreen';
import { googleAuth } from './src/utils/googleAuth';
import { getAuthInfo } from './src/utils/Auth';

async function showHome(navigation)
{
  const userInfo = await getAuthInfo();
  if (await checkBiometric() && userInfo && userInfo.length != 0) {
    ToastAndroid.show(`Welcome ${userInfo.name}`, ToastAndroid.LONG);
    navigation.navigate("Home");
  }
  else {
    if (await googleAuth()) {
      const user = await getAuthInfo();
      ToastAndroid.show(`Welcome ${user.name}`, ToastAndroid.LONG);
      navigation.navigate("Home");
    }
  }
}
function Home({ navigation })
{
  useEffect(() =>
  {
    const checkUser = async () =>
    {
      if (await getAuthInfo() && await checkBiometric()) {
        navigation.navigate("Home");
      }
      else if (await getAuthInfo()) {
        BackHandler.exitApp();
      }
    }
    checkUser();
  }, []);
  const { colors, dark } = useTheme();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={dark ? 'dark-content' : 'light-content'} />
      <LogScreen fontColor={{ color: colors.text }} handlePress={() => showHome(navigation)} navigation={navigation} />
    </SafeAreaView>
  )
}
export default function App()
{


  const Stack = createStackNavigator();
  const colorScheme = useColorScheme();
  const theme = colorScheme == "dark" ? DarkTheme : DefaultTheme;
  return (
    <NavigationContainer documentTitle={{ enabled: true }} theme={theme}  >
      <Stack.Navigator mode={"modal"} headerMode={"none"}  >
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
  }
});
