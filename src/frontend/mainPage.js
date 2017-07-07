import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import config from '../backend/firebase';
import styles from '../style';


export default class LoginPage  extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      Password:''
    }
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
