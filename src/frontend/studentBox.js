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
      displayname:firebase.auth().currentUser.uid,
      nameOfStudent : this.props.studnetName,
    };
    this._present = this._present.bind(this);
    this._absent = this._absent.bind(this);
    this._late = this._late.bind(this);
  }


  _present(){
   const nameForUpdate = this.state.nameOfStudent;
   const displaynamedForUpdate = this.state.displayname;
  firebase.database().ref().child('Class A/'+ this.state.displayname +'/Student/'+ this.state.nameOfStudent + '/Present').once("value", function(snap) {
  const updates = {};
  updates['Class A/' + displaynamedForUpdate +'/Student/'+ nameForUpdate + '/Present'] = snap.val()+1;

    return firebase.database().ref().update(updates);
});
 alert('PRESENT');
}


_absent(){
  const nameForUpdate = this.state.nameOfStudent;
  const displaynamedForUpdate = this.state.displayname;
 firebase.database().ref().child('Class A/'+ this.state.displayname +'/Student/'+ this.state.nameOfStudent + '/Apsent').once("value", function(snap) {
 const updates = {};
 updates['Class A/' + displaynamedForUpdate +'/Student/'+ nameForUpdate + '/Apsent'] = snap.val()+1;

   return firebase.database().ref().update(updates);

});
alert('Apsent');
}

_late(){
  const nameForUpdate = this.state.nameOfStudent;
 const displaynamedForUpdate = this.state.displayname;
 firebase.database().ref().child('Class A/'+ this.state.displayname +'/Student/'+ this.state.nameOfStudent + '/Late').once("value", function(snap) {
 const updates = {};
 updates['Class A/' + displaynamedForUpdate +'/Student/'+ nameForUpdate + '/Late'] = snap.val()+1;

   return firebase.database().ref().update(updates);

});
alert('Late');
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

      <TouchableHighlight
      underlayColor = {'transparent'}
      onPress = {this._absent}
      ><Text>Apsent</Text>
      </TouchableHighlight>


      <TouchableHighlight
      underlayColor = {'transparent'}
      onPress = {this._late}
      ><Text>Late</Text>
      </TouchableHighlight>
      </View>
    );
  }
}
