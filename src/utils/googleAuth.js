import * as Google from "expo-google-app-auth";

import { setAuthInfo, setTokenInfo } from "./Auth";
const _configs = {
  androidClientId: "837990584120-66jqvguk63pcst7tv2e9643pcq7v4s56.apps.googleusercontent.com",
  androidStandaloneAppClientId: "837990584120-2msdh5tldh1m930es11g24btlohec58u.apps.googleusercontent.com",
  scopes: ["profile", "email"],
};
async function googleAuth()
{
  try {
    const { type, accessToken, user } = await Google.logInAsync(_configs);
    if (type == "success") {
      await setAuthInfo(user);
      await setTokenInfo(accessToken);
    }
    return type == "success" ? true : false;
  }
  catch (error) {
    return false;
  }
}

export
{
  googleAuth
};