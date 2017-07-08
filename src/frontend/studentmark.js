import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import StudentBox from './studentBox';
import config from '../backend/firebase';
import APLhistory from './APLhistory';
import * as firebase from 'firebase';
import styles from '../style';

//path to the root
 //const firebaseRef = firebase.database().ref().child('Complain');
 //firebaseRef.child_added("Text").set(this.state.databaseDataFromUser);
 //firebaseRef.push().set(this.state.databaseDataFromUser);
export default class StudentMarkPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayname:firebase.auth().currentUser.uid,
      nameOfStudent : this.props.studnetName,
      mark : '',
    }
    this._marktodatabase = this._marktodatabase.bind(this);
  }

  _marktodatabase(){
  firebase.database().ref('Class A/'+ this.state.displayname +'/Student/'+ this.state.nameOfStudent + '/Mark').push().set(this.state.mark);
  }

  render(){
    return(
      <View>
       <Text>{this.props.studnetName}</Text>

       <TextInput
         onChangeText = {(mark) => this.setState({mark})}
       />
       <Button
        onPress={this._marktodatabase}
        title="confirm"
        color="green"
       />
      </View>
    );
  }
}
