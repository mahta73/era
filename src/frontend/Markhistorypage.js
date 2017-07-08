import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebaseRef from '../backend/firebase';
import Styles from '../style';
import Markhistory from './Markhistory';
import * as firebase from 'firebase';
export default class Markhistorypage  extends React.Component{
constructor(props){
  super(props);
  this.state = {
    nameOfStudent : this.props.studnetName,
    displayname:firebase.auth().currentUser.uid,
    mark : [],
  }
}

render(){
  return(
    <View style={Styles.container}>
    <Markhistory studnetName = 'Mahta Rezayazdi'/>
    </View>
  );
}
}
