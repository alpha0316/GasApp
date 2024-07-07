import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import Onboarding from '../Screens/Onboarding';
import GeneralDetails from '../Screens/GeneralDetails';
import SelectHostel from '../Screens/SelectHostel';
import Home from '../Screens/Home';
import SelectCylinder from '../Screens/SelectCylinder';

const Stack = createNativeStackNavigator();

export default function MainNav() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      {/*<Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />*/}
      <Stack.Screen name="GeneralDetails" component={GeneralDetails} options={{ headerShown: false }} />
      <Stack.Screen name="SelectHostel" component={SelectHostel} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="SelectCylinder" component={SelectCylinder} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}