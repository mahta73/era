import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { TabNavigator } from 'react-navigation';
import StudentBox from './studentBox';
import config from '../backend/firebase';
import * as firebase from 'firebase';
import Styles from '../style';


export default class Markhistory extends React.Component{
constructor(props){
  super(props);
  this.state = {
    nameOfStudent : this.props.studnetName,
    displayname:firebase.auth().currentUser.uid,
    mark : [],
  }
}

componentWillMount(){
const that = this;
firebase.database().ref('Class A/'+ this.state.displayname +'/Student/'+ this.state.nameOfStudent + '/Mark').on('child_added' , function getData(data){
  that.setState({mark:[...that.state.mark, data.val() + ' ']});
});

}
render(){
  return(
    <View>
    <Text>{this.props.studnetName}</Text>
    <Text>{this.state.mark}</Text>
    </View>
  );
}
}
