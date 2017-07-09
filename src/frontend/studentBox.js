import React from 'react';
import { Text, View, TouchableHighlight} from 'react-native';
import config from '../backend/firebase';
import * as firebase from 'firebase';
import Styles from '../style';

const database = firebase.database();

export default class StudentBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      displayname: firebase.auth().currentUser.uid,
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
 alert(this.state.nameOfStudent + ' is PRESENT');
}


_absent(){
  const nameForUpdate = this.state.nameOfStudent;
  const displaynamedForUpdate = this.state.displayname;
 firebase.database().ref().child('Class A/'+ this.state.displayname +'/Student/'+ this.state.nameOfStudent + '/Apsent').once("value", function(snap) {
 const updates = {};
 updates['Class A/' + displaynamedForUpdate +'/Student/'+ nameForUpdate + '/Apsent'] = snap.val()+1;

   return firebase.database().ref().update(updates);

});
 alert(this.state.nameOfStudent + ' is Apsent');
}

_late(){
  const nameForUpdate = this.state.nameOfStudent;
 const displaynamedForUpdate = this.state.displayname;
 firebase.database().ref().child('Class A/'+ this.state.displayname +'/Student/'+ this.state.nameOfStudent + '/Late').once("value", function(snap) {
 const updates = {};
 updates['Class A/' + displaynamedForUpdate +'/Student/'+ nameForUpdate + '/Late'] = snap.val()+1;

   return firebase.database().ref().update(updates);

});
 alert(this.state.nameOfStudent + ' is Late');
}
  render(){
    return(

      <View style={Styles.container2}>


      <Text style={Styles.nameStyle}>{this.props.studnetName}</Text>

      <TouchableHighlight
        style={Styles.presentStyle}
      underlayColor = {'transparent'}
      onPress = {this._present}
      >
      <Text
        style={Styles.ButtonTextView}
        >
        Present
      </Text>
      </TouchableHighlight>

      <TouchableHighlight
      style={Styles.absentStyle}
      underlayColor = {'transparent'}
      onPress = {this._absent}
      >
      <Text
        style={Styles.ButtonTextView}
        >
        Absent
      </Text>
      </TouchableHighlight>


      <TouchableHighlight
      style={Styles.lateStyle}
      underlayColor = {'transparent'}
      onPress = {this._late}
      >
      <Text
        style={Styles.ButtonTextView}
        >
        Late
      </Text>
      </TouchableHighlight>

      </View>
    );
  }
}
