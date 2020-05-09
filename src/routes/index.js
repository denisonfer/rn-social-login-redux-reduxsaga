import React from 'react';
import { useSelector } from "react-redux";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import TelaInicial from '../pages/TelaInicial';

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);

  const Auth = createStackNavigator();
  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      {
        signed ? (
          <Stack.Navigator>
            <Stack.Screen name="TelaInicial" component={TelaInicial}></Stack.Screen>
          </Stack.Navigator>

        ) : (
            <Auth.Navigator>
              <Auth.Screen
                name="Login"
                component={Login}
              ></Auth.Screen>
            </Auth.Navigator>
          )
      }
    </NavigationContainer>
  );
}

