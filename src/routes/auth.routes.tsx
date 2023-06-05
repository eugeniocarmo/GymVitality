import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp';


type AuthRoute = {
  SignIn: undefined;
  SignUp: undefined;
}

export type AuthNavigatiorRoutesProps = NativeStackNavigationProp<AuthRoute>;


const { Navigator, Screen} = createNativeStackNavigator<AuthRoute>();

export function AuthRoutes(){

  return (
    <Navigator screenOptions={{headerShown: false}}>

      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />

    </Navigator>
  );
}