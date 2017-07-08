import React from 'react';
import { StyleSheet,Button, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { TabNavigator } from 'react-navigation';
import StudentBox from './studentBox';
import config from '../backend/firebase';
import APLhistory from './APLhistory';
import studentmark from './studentmark';
import markHistory from './markHistory';

import * as firebase from 'firebase';

import Styles from '../style';


const StudentMainPage = TabNavigator({
  StudentBox: {screen: StudentBox},
  APLhistory: {screen: APLhistory},
  studentmark: {screen: studentmark},
  markHistory: {screen: markHistory},


},{
  tabBarOptions: {
    activeTintColor: '#8A2BE2',
    labelStyle: {
      fontSize: 13,
      paddingBottom:10,
    },
    style: {
      backgroundColor: '#87CEFA',
    },
  },
}

);

export default  StudentMainPage ;
