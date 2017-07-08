import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { TabNavigator } from 'react-navigation';
import StudentBox from './studentBox';
import config from '../backend/firebase';
import * as firebase from 'firebase';
import Styles from '../style';


export default class APLhistory extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nameOfStudent : this.props.studnetName,
      displayname:firebase.auth().currentUser.uid,
      NumberOfPresent : 0,
      NumberOfAbsent : 0,
      NumberOfLate : 0
    }
  }


  componentWillMount(){
  const that = this;
  firebase.database().ref('Class A/'+ this.state.displayname +'/Student/'+ this.state.nameOfStudent + '/Present').on('value' , getPresent);
  function getPresent(data){
    that.setState({NumberOfPresent : data.val()});
  }

  firebase.database().ref('Class A/'+ this.state.displayname +'/Student/'+ this.state.nameOfStudent + '/Apsent').on('value' , getApsent);
  function getApsent(data){
    that.setState({NumberOfAbsent : data.val()});
  }

  firebase.database().ref('Class A/'+ this.state.displayname +'/Student/'+ this.state.nameOfStudent + '/Late').on('value' , getLate);
  function getLate(data){
    that.setState({NumberOfLate : data.val()});
  }
}

  render(){
    return(
      <View style={Styles.container}>
      <Text>{this.props.studnetName}</Text>
      <Text>Number of Present : {this.state.NumberOfPresent}</Text>
      <Text>Number of Apsent : {this.state.NumberOfAbsent}</Text>
      <Text>Number of Late : {this.state.NumberOfLate}</Text>

      </View>
    );
  }
}