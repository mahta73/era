import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../style';


export default class LoginPage  extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
      <Text>Login page</Text>
      </View>
    );
  }
}
