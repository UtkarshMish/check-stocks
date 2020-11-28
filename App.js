import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { BackHandler, SafeAreaView, StyleSheet, View } from 'react-native';
import { useColorScheme, ToastAndroid } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import checkBiometric from "./src/utils/biometric.js";
import LogScreen from './src/components/LogScreen';
import HomeScreen from './src/components/HomeScreen';
import { googleAuth } from './src/utils/googleAuth';
import { getAuthInfo } from './src/utils/Auth';
async function showHome(navigation)
{
  const userInfo = await getAuthInfo();
  if (await checkBiometric() && userInfo && userInfo.name.length != 0) {
    ToastAndroid.show(`Welcome ${userInfo.name}`, ToastAndroid.LONG);
    return navigation.navigate("Home");
  }
  else if (!userInfo) {
    if (await googleAuth()) {
      const user = await getAuthInfo();
      if (user)
        ToastAndroid.show(`Welcome ${user.name}`, ToastAndroid.LONG);
      return navigation.navigate("Home");
    }
  }
}
function Home({ navigation })
{

  const { colors } = useTheme() || null;
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <LogScreen fontColor={{ color: colors.text }} handlePress={() => showHome(navigation)} navigation={navigation} />
    </SafeAreaView>
  );
}
export default function App()
{
  const [userExist, setUserExist] = useState(null);
  useEffect(() =>
  {
    (async () =>
    {
      if (await getAuthInfo() && await checkBiometric()) {
        return setUserExist(true);
      }
      else if (await getAuthInfo()) {
        BackHandler.exitApp();
      }
      return setUserExist(false);
    })();
  }, []);

  const Stack = createStackNavigator();
  const colorScheme = useColorScheme();
  const theme = colorScheme == "dark" ? DarkTheme : DefaultTheme;
  if (userExist === null) {
    return <View></View>;
  }
  return (
    <NavigationContainer documentTitle={{ enabled: false }} theme={theme}  >
      <StatusBar barStyle={colorScheme == "dark" ? 'dark-content' : 'light-content'} />
      <Stack.Navigator mode={"modal"} headerMode={"none"} >
        {!userExist ? <Stack.Screen name="Log Screen" component={Home} /> : null}
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
