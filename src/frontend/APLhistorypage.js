import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebaseRef from '../backend/firebase';
import Styles from '../style';
import APLhistory from './APLhistory';

export default class APLhistorypage  extends React.Component{
constructor(props){
  super(props);
}
render(){
  return(
    <View style={Styles.container}>
    <APLhistory studnetName = 'Mahta Rezayazdi'/>
    </View>
  );
}
}
