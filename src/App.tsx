import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import InfoScreen from './screens/InfoScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Linking } from 'react-native';
import QrCodeScreen from './screens/QrCodeScreen';
import SingupScreen from './screens/SingupScreen';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Info: { id: string };
  QrCode: undefined;
  SignUp: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Home: 'home',
      Login: 'login',
      Info: 'student/:id', 
      QrCode: 'qrCode',
      SignUp: 'signup',
    },
  },
};

export default function App() {
  useEffect(() => {
    const handleDeepLink = (event: { url: string }) => {
      console.log('Deep Link recibido:', event.url);
    };

    const linkSubscription = Linking.addEventListener('url', handleDeepLink);

    return () => {
      linkSubscription.remove();
    };
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Info" component={InfoScreen} />
          <Stack.Screen name="QrCode" component={QrCodeScreen} />
          <Stack.Screen name="SignUp" component={SingupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
