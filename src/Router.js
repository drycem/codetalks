import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './pages/Login';
import Sign from './pages/Sign';
import Rooms from './pages/Rooms';

const Stack = createNativeStackNavigator();

export default () => {
  const AuthStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="SignPage" component={Sign} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="Home" component={Rooms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
