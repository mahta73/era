import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
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
    whichClass : this.props.Wclass,
    mark : [],
  }
  const that = this;
  firebase.database().ref('Class/'+this.state.whichClass + '/'+ this.state.displayname +'/Student/'+ this.state.nameOfStudent + '/Mark').on('child_added' , function getData(data){
    that.setState({mark:[...that.state.mark, data.val() + ' ']});
  });

}

render(){
  return(
    <View style={Styles.container2}>

    <Text style={Styles.nameStyle}>
     {this.props.studnetName}
    </Text>

      <ScrollView
        style={Styles.scrollView}
        horizontal={true}
        >
          <Text style={Styles.markHistoryView}>
            {this.state.mark}
          </Text>
        </ScrollView>

    </View>
  );
}
}
