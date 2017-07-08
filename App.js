import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPage from './src/frontend/mainPage';
import config from './src/backend/firebase';
import StudentMainPage from './src/frontend/studentMainPage';
import Degree from './src/frontend/Degree';
import Classes from './src/frontend/Classes';

const ProjectHome = StackNavigator({
  Home:{screen: LoginPage},
  Degree:{screen: Degree},
  Classes:{screen: Classes},
  studentMainPage:{screen: StudentMainPage},
});
export default ProjectHome;
