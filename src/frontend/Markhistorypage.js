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

    <Markhistory  studnetName = 'Peyman Ghazvini' Wclass='A'/>



    <Markhistory  studnetName = 'Saman Ghazvini' Wclass='B'/>



    <Markhistory   studnetName = 'Mehrad Rezayazdi' Wclass='A'/>



    <Markhistory  studnetName = 'Mahta Rezayazdi' Wclass='A'/>



    <Markhistory  studnetName = 'Peyman2 Ghazvini' Wclass='A'/>



    <Markhistory  studnetName = 'Saman2 Ghazvini' Wclass='A'/>



    <Markhistory  studnetName = 'Mehrad2 Rezayazdi' Wclass='A'/>



    <Markhistory  studnetName = 'Mahta2 Rezayazdi' Wclass='A'/>



    <Markhistory  studnetName = 'Peyman3 Ghazvini' Wclass='A'/>



    <Markhistory  studnetName = 'Saman3 Ghazvini' Wclass='A'/>



    <Markhistory  studnetName = 'Mehrad3 Rezayazdi' Wclass='A'/>



    <Markhistory  studnetName = 'Mahta3 Rezayazdi' Wclass='A'/>



    <Markhistory  studnetName = 'Peyman4 Ghazvini' Wclass='A'/>



    <Markhistory  studnetName = 'Saman4 Ghazvini' Wclass='A'/>



    <Markhistory  studnetName = 'Mehrad4 Rezayazdi' Wclass='A'/>



    <Markhistory  studnetName = 'Mahta4 Rezayazdi' Wclass='A'/>

    </ScrollView>
  );
}
}
