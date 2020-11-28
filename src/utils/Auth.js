import * as SecureStore from "expo-secure-store";
async function getAuthInfo()
{
  const storageAvailable = await SecureStore.isAvailableAsync();
  if (storageAvailable) {
    const user = await SecureStore.getItemAsync("user");
    if (user && user.length != 0)
      return JSON.parse(user);
    return null;
  }
}
async function getTokenInfo()
{
  const storageAvailable = await SecureStore.isAvailableAsync();
  if (storageAvailable) {
    const token = await SecureStore.getItemAsync("token");
    if (token && token.length != 0)
      return JSON.parse(token);
    return null;
  }
}
async function setAuthInfo(user)
{
  const storageAvailable = await SecureStore.isAvailableAsync();
  if (storageAvailable && user && user.length != 0) {
    await SecureStore.setItemAsync("user", JSON.stringify(user));
  }
}
async function setTokenInfo(token)
{
  const storageAvailable = await SecureStore.isAvailableAsync();
  if (storageAvailable && token && token.length != 0) {
    await SecureStore.setItemAsync("token", JSON.stringify(token));
  }
} export
{
  getAuthInfo,
  getTokenInfo,
  setAuthInfo,
  setTokenInfo
};