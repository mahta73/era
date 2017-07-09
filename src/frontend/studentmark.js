import React from 'react';
import {Text, View,TextInput, TouchableHighlight, Button} from 'react-native';
import config from '../backend/firebase';
import * as firebase from 'firebase';
import Styles from '../style';

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

  _marktodatabase(markNumber){
  firebase.database().ref('Class A/'+ this.state.displayname +'/Student/'+ this.state.nameOfStudent + '/Mark').push().set(this.state.mark);
  alert(this.state.nameOfStudent + ' got ' + this.state.mark);
}

  render(){
    return(
      <View style={Styles.container2} >
        <View style={Styles.Row}>
          <Text  style={Styles.nameStyle}>
            {this.props.studnetName}
          </Text>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder={'mark'}
            onChangeText={(number)=>this.setState({mark: number})}
            style={Styles.inputMark}
            editable = {true}
            maxLength = {3}
            value={this.state.mark}
            />
          <Button
            onPress={this._marktodatabase}
            title={'confirm'}
            color={'blue'}
            />
        </View>

      </View>
    );
  }
}
