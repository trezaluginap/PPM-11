// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Signup from './src/screens/SignUp';
import HomeScreem from './src/screens/HomeScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomeScreen" component={HomeScreem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
