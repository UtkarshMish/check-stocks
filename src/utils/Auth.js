import * as SecureStore from "expo-secure-store";
async function getAuthInfo()
{
  if (await SecureStore.isAvailableAsync()) {
    const user = await SecureStore.getItemAsync("user");
    if (user && user.length != 0)
      return JSON.parse(user);
    return null;
  }
}
async function setAuthInfo(user)
{
  if (SecureStore.isAvailableAsync() && user && user.length != 0) {
    await SecureStore.setItemAsync("user", JSON.stringify(user))
  }
} export
{
  getAuthInfo,
  setAuthInfo
};