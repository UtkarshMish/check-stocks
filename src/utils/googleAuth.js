import * as Google from "expo-google-app-auth";
import * as AppAuth from "expo-app-auth";

import { setAuthInfo, setTokenInfo } from "./Auth";
import { ANDROID_CLIENT_ID, ANDROID_STANDALONE_CLIENT_ID } from "@env";
const _configs = {
  androidClientId: ANDROID_CLIENT_ID,
  androidStandaloneAppClientId: ANDROID_STANDALONE_CLIENT_ID,
  scopes: ["profile", "email"],
  redirectUrl: `${AppAuth.OAuthRedirect}:/oauthredirect`
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