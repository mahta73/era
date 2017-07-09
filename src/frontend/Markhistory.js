import React from 'react';
import { Text, View} from 'react-native';
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
  const that = this;
  firebase.database().ref('Class A/'+ this.state.displayname +'/Student/'+ this.state.nameOfStudent + '/Mark').on('child_added' , function getData(data){
    that.setState({mark:[...that.state.mark, data.val() + ' ']});
  });

}

render(){
  return(
    <View style={Styles.container3}>
    <View style={{marginTop:2}}>
    <Text>{this.props.studnetName}</Text>
    </View>
    <View style={{marginTop:2}}>
    <Text>{this.state.mark}</Text>
    </View>
    </View>
  );
}
}
