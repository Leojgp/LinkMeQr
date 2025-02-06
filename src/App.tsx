import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import InfoScreen from './screens/InfoScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import QrCodeScreen from './screens/QrCodeScreen';
import SingupScreen from './screens/SingupScreen';
import HomeScreen from './screens/HomeScreen';

type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  Info: { id: string };
  QrCode: undefined;
  SignUp: undefined;
  Home: undefined
  Test: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Main: 'main',
      Login: 'login',
      Info: 'student/:id', 
      QrCode: 'qrCode',
      SignUp: 'signup',
      Home: 'home',
    },
  },
};

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false, }} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Info" component={InfoScreen} />
          <Stack.Screen name="QrCode" component={QrCodeScreen} />
          <Stack.Screen name="SignUp" component={SingupScreen} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
