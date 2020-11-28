import Axios from "axios";
import * as Google from "expo-google-app-auth";

import { setAuthInfo } from "./Auth";
const _configs = {
  androidClientId: "837990584120-66jqvguk63pcst7tv2e9643pcq7v4s56.apps.googleusercontent.com",
  androidStandaloneAppClientId: "837990584120-66jqvguk63pcst7tv2e9643pcq7v4s56.apps.googleusercontent.com",
  scopes: ["profile", "email"],
};
async function googleAuth()
{
  try {
    const { type, accessToken, user } = await Google.logInAsync(_configs);
    let userInfoResponse = await Axios.get(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    if (type == "success") {
      await setAuthInfo(user);
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