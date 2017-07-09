import React from 'react';
import { StyleSheet,Button, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { TabNavigator } from 'react-navigation';
import StudentBox from './studentBox';
import APL from './APL';
import config from '../backend/firebase';
import APLhistory from './APLhistory';
import studentmark from './studentmark';
import APLhistorypage from './APLhistorypage'
import markHistory from './markHistory';
import Markpage from './Markpage';
import * as firebase from 'firebase';

import Styles from '../style';


const StudentMainPage = TabNavigator({
  APL: {screen: APL},
  APLhistory: {screen: APLhistorypage},
  Markpage: {screen: Markpage},
  markHistory: {screen: markHistory},


},{
  tabBarPosition: 'bottom',
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
