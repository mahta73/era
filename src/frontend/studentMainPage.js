import React from 'react';
import { ScrollView , View} from 'react-native';
import { TabNavigator } from 'react-navigation';
import StudentBox from './studentBox';
import APL from './APL';
import config from '../backend/firebase';
import APLhistory from './APLhistory';
import studentmark from './studentmark';
import APLhistorypage from './APLhistorypage'
import Markhistory from './Markhistory';
import Markpage from './Markpage';
import Markhistorypage from './Markhistorypage';
import * as firebase from 'firebase';

import Styles from '../style';


const StudentMainPage = TabNavigator({
  APL: {screen: APL},
  APLhistory: {screen: APLhistorypage},
  Markpage: {screen: Markpage},
  Markhistorypage: {screen: Markhistorypage},


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
