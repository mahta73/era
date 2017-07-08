import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebaseRef from '../backend/firebase';
import Styles from '../style';
import StudentBox from './studentBox';

export default class APL  extends React.Component{
constructor(props){
  super(props);
}
render(){
  return(
    <View style={Styles.container}>
    <StudentBox studnetName = 'Mahta Rezayazdi'/>
    </View>
  );
}
}
