import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import StudentBox from './studentBox';
import config from '../backend/firebase';
import APLhistory from './APLhistory';
import * as firebase from 'firebase';
import styles from '../style';


export default class StudentMainPage extends React.Component{
  constructor(props){
    super(props);

  }


  render(){
    return(
      <View>
      <StudentBox  studnetName = 'Mehrad Rezayazdi' />
      <APLhistory studnetName = 'Mehrad Rezayazdi' />
      </View>
    );
  }
}
