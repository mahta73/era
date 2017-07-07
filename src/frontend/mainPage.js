import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import config from '../backend/firebase';
import * as firebase from 'firebase';
import styles from '../style';


export default class LoginPage  extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      Password:''
    }
    this._signIn = this._signIn.bind(this);
  }

  _signIn(){
  const {navigate} = this.props.navigation;
firebase.auth().signInWithEmailAndPassword(this.state.username,this.state.Password).then(function(){
  navigate('studentMainPage');
}).catch(function(e){
  alert(e);
})
  }

  render(){

    return(
      <View>


      <Image source = {require('../img/3855.png')} />


      <Text>Era Registry</Text>


      <TextInput
     onChangeText={username => this.setState({username})}
     placeholder = {"Username"}
     placeHolderTextColor = 'black'
     />


      <TextInput
      onChangeText={Password => this.setState({Password})}
      placeholder = {"Password"}
      secureTextEntry = {true}
      placeHolderTextColor = 'black'
      />

      <TouchableHighlight
        underlayColor = {'transparent'}
        onPress = {this._signIn}
       >
     <View>
     <Text>
      Sign in
      </Text>
      </View>
      </TouchableHighlight>


      </View>
    );
  }
}
