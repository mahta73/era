import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import config from '../backend/firebase';
import * as firebase from 'firebase';
import styles from '../style';


export default class StudentMainPage extends React.Component{


  render(){
    return(
      <View>
      <Text>Studet page</Text>
      </View>
    );
  }
}
