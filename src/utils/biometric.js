import * as LocalAuthentication from 'expo-local-authentication';
import { ToastAndroid } from 'react-native';
export default async function checkBiometric()
{
  const hasHardware = await LocalAuthentication.hasHardwareAsync();
  const hasEnrolled = await LocalAuthentication.isEnrolledAsync();
  if (hasHardware && hasEnrolled) {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Verify Yourself",
    });
    if (result.success) {
      return true;
    }
    if (result.error) {
      ToastAndroid.showWithGravity("Authentication Failed ! Try Again !", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    }
  }
  else if (hasHardware && !hasEnrolled) {
    return true;
  }
  return false;
}