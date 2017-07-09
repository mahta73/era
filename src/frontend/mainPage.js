import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebaseRef from '../backend/firebase';
import Styles from '../style';


export default class LoginPage  extends React.Component{
  constructor(props){
    super(props);
    console.ignoredYellowBox = [
         'Setting a timer'
     ];
    this.state = {
      username:'',
      Password:''
    }
    this._signIn = this._signIn.bind(this);
  }

  _signIn(){
  const {navigate} = this.props.navigation;
  firebaseRef.auth().signInWithEmailAndPassword(this.state.username,this.state.Password).then(function(){
  navigate('Degree');
}).catch(function(e){
  alert(e);
})
  }

  render(){

    return(
      <View style={Styles.container}>
      <Image source = {require('../img/3855.png')} />
      <Text style={Styles.headTxt}>Era Registry</Text>

      <TextInput
     underlineColorAndroid='transparent'
     onChangeText={(text) => this.setState({username: text})}
     placeholder = {"Username"}
     placeHolderTextColor = 'black'
     style={Styles.inputStyle}

     />


      <TextInput
      underlineColorAndroid='transparent'
      onChangeText={(text) => this.setState({Password: text })}
      placeholder = {"Password"}
      secureTextEntry = {true}
      placeHolderTextColor = 'black'
      style={Styles.inputStyle}
      />


      <TouchableHighlight
        underlayColor = {'transparent'}
        style={Styles.Button}
        onPress={this._signIn}
        >
        <Text style={Styles.ButtonView} >
          Login
        </Text>
      </TouchableHighlight>


      </View>
    );
  }
}
