import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator ,TabNavigator} from 'react-navigation';
import LoginPage from './src/frontend/mainPage';
import config from './src/backend/firebase';

//pages
import StudentMainPage from './src/frontend/studentMainPage';
import Degree from './src/frontend/Degree';
import Classes from './src/frontend/Classes';
import APLhistory from './src/frontend/APLhistory';
import studentmark from './src/frontend/studentmark';
import studentBox from './src/frontend/studentBox';

const ProjectHome = StackNavigator({
  Degree:{screen: Degree},
  Classes:{screen: Classes},
  studentMainPage:{screen: StudentMainPage},
  APLhistory:{screen: APLhistory},
  studentBox:{screen: studentBox},
  studentmark:{screen: studentmark},

});
export default ProjectHome;
