import React from 'react';
import { ScrollView } from 'react-native';
import firebaseRef from '../backend/firebase';
import Styles from '../style';
import Markhistory from './Markhistory';
import * as firebase from 'firebase';

export default class Markhistorypage  extends React.Component{
constructor(props){
  super(props);
  this.state = {
    nameOfStudent : this.props.studnetName,
    displayname:firebase.auth().currentUser.uid,
    mark : [],
  }
}

render(){
  return(
    <ScrollView>

    <Markhistory  studnetName = 'Peyman Ghazvini'/>



    <Markhistory  studnetName = 'Saman Ghazvini'/>



    <Markhistory   studnetName = 'Mehrad Rezayazdi'/>



    <Markhistory  studnetName = 'Mahta Rezayazdi'/>



    <Markhistory  studnetName = 'Peyman2 Ghazvini'/>



    <Markhistory  studnetName = 'Saman2 Ghazvini'/>



    <Markhistory  studnetName = 'Mehrad2 Rezayazdi'/>



    <Markhistory  studnetName = 'Mahta2 Rezayazdi'/>



    <Markhistory  studnetName = 'Peyman3 Ghazvini'/>



    <Markhistory  studnetName = 'Saman3 Ghazvini'/>



    <Markhistory  studnetName = 'Mehrad3 Rezayazdi'/>



    <Markhistory  studnetName = 'Mahta3 Rezayazdi'/>



    <Markhistory  studnetName = 'Peyman4 Ghazvini'/>



    <Markhistory  studnetName = 'Saman4 Ghazvini'/>



    <Markhistory  studnetName = 'Mehrad4 Rezayazdi'/>



    <Markhistory  studnetName = 'Mahta4 Rezayazdi'/>

    </ScrollView>
  );
}
}
