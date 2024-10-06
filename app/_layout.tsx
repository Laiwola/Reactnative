import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './index';
import HomeScreen from '@/app-example/(tabs)';
const stack=createNativeStackNavigator()
const App = () => {
  return (
    <Index/>
  );
};

export default App;
