import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from "firebase/auth";
import Login from './app/screens/Login';
import Details from './app/screens/Details';
import UserHome from './app/screens/UserHome';
import { fb_auth } from './firebaseConfig';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

const InsideLayout = () => {
  return (
    <InsideStack.Navigator initialRouteName='UserHome'>
      <InsideStack.Screen name='User Home' component={UserHome} options={{ headerShown: false }} />
      <InsideStack.Screen name='Details' component={Details} />
    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(fb_auth, (user) => {
      console.log(user);
      setUser(user)
    })
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {
          user ?
            <Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false }} />
            :
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
