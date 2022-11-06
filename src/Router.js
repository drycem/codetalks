import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

import Login from './pages/Login';
import Sign from './pages/Sign';
import Rooms from './pages/Rooms';
import Messages from './pages/Messages';
import colors from './colors';
import {TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

export default () => {
  const [userSession, setUserSession] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged(user => setUserSession(!!user));
  }, []);

  const AuthStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="SignPage" component={Sign} />
    </Stack.Navigator>
  );

  function logout() {
    auth()
      .signOut()
      .catch(err => console.log(err));
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession && (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
        <Stack.Screen
          name="Rooms"
          component={Rooms}
          options={{
            headerRight: () => (
              <TouchableOpacity onPress={logout}>
                <Icon name="logout" size={32} color={colors.primary} />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
            headerTintColor: colors.primary,
            headerTitleStyle: {fontSize: 32},
          }}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};
