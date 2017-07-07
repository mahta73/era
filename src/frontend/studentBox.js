import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import config from '../backend/firebase';
import * as firebase from 'firebase';
import styles from '../style';

const database = firebase.database();

export default class StudentBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      nameOfStudent : '',
    };
    this._present = this._present.bind(this);
  }


  _present(){
  this.setState( {nameOfStudent : this.props.studnetName});
  const firebaseRef = firebase.database().ref().child('Class A/Student/'+ this.state.nameOfStudent +'/Absent');
  firebaseRef.push().set(1);
  alert('present');
       }

  render(){
    return(
      <View>
      <Text>{this.props.studnetName}</Text>

      <TouchableHighlight
      underlayColor = {'transparent'}
      onPress = {this._present}
      ><Text>Present</Text>
      </TouchableHighlight>
      </View>
    );
  }
}
