import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebaseRef from '../backend/firebase';
import Styles from '../style';
import StudentMarkPage from './studentmark';

export default class Markpage  extends React.Component{
constructor(props){
  super(props);
}
render(){
  return(
    <View style={Styles.container}>
    <StudentMarkPage studnetName = 'Mahta Rezayazdi'/>
    </View>
  );
}
}
