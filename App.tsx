import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import LoadingScreen from './pages/LoadingScreen';
import HomeScreen from './pages/HomeScreen';

import VideoCall_Home from './pages/videoCall/VideoCall_Home';

const Stack = createStackNavigator();

const DutchNow = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="loading"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="videocall_home"
          component={VideoCall_Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DutchNow;