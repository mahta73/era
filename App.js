import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPage from './src/frontend/mainPage';
import config from './src/backend/firebase';

const ProjectHome = StackNavigator({
  Home:{screen: LoginPage},
});
export default ProjectHome;
