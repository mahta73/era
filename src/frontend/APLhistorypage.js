import React from 'react';
import { ScrollView } from 'react-native';
import firebaseRef from '../backend/firebase';
import Styles from '../style';
import APLhistory from './APLhistory';

export default class APLhistorypage  extends React.Component{
constructor(props){
  super(props);
}
render(){
  return(

    <ScrollView>

    <APLhistory  studnetName = 'Peyman Ghazvini' Wclass='A'/>



    <APLhistory  studnetName = 'Saman Ghazvini' Wclass='B'/>



    <APLhistory   studnetName = 'Mehrad Rezayazdi' Wclass='A'/>



    <APLhistory  studnetName = 'Mahta Rezayazdi' Wclass='A'/>



    <APLhistory  studnetName = 'Peyman2 Ghazvini' Wclass='A'/>



    <APLhistory  studnetName = 'Saman2 Ghazvini' Wclass='A'/>



    <APLhistory  studnetName = 'Mehrad2 Rezayazdi' Wclass='A'/>



    <APLhistory  studnetName = 'Mahta2 Rezayazdi' Wclass='A'/>



    <APLhistory  studnetName = 'Peyman3 Ghazvini' Wclass='A'/>



    <APLhistory  studnetName = 'Saman3 Ghazvini' Wclass='A'/>



    <APLhistory  studnetName = 'Mehrad3 Rezayazdi' Wclass='A'/>



    <APLhistory  studnetName = 'Mahta3 Rezayazdi' Wclass='A'/>


    <APLhistory  studnetName = 'Peyman4 Ghazvini' Wclass='A'/>


    <APLhistory  studnetName = 'Saman4 Ghazvini' Wclass='A'/>


    <APLhistory  studnetName = 'Mehrad4 Rezayazdi' Wclass='A'/>


    <APLhistory  studnetName = 'Mahta4 Rezayazdi' Wclass='A'/>


    </ScrollView>

  );
}
}
