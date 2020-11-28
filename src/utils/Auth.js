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
async function setAuthInfo(user)
{
  const storageAvailable = await SecureStore.isAvailableAsync();
  if (storageAvailable && user && user.length != 0) {
    await SecureStore.setItemAsync("user", JSON.stringify(user));
  }
} export
{
  getAuthInfo,
  setAuthInfo
};