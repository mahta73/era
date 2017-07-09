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

    <APLhistory  studnetName = 'Peyman Ghazvini'/>



    <APLhistory  studnetName = 'Saman Ghazvini'/>



    <APLhistory   studnetName = 'Mehrad Rezayazdi'/>



    <APLhistory  studnetName = 'Mahta Rezayazdi'/>



    <APLhistory  studnetName = 'Peyman2 Ghazvini'/>



    <APLhistory  studnetName = 'Saman2 Ghazvini'/>



    <APLhistory  studnetName = 'Mehrad2 Rezayazdi'/>



    <APLhistory  studnetName = 'Mahta2 Rezayazdi'/>



    <APLhistory  studnetName = 'Peyman3 Ghazvini'/>



    <APLhistory  studnetName = 'Saman3 Ghazvini'/>



    <APLhistory  studnetName = 'Mehrad3 Rezayazdi'/>



    <APLhistory  studnetName = 'Mahta3 Rezayazdi'/>


    <APLhistory  studnetName = 'Peyman4 Ghazvini'/>


    <APLhistory  studnetName = 'Saman4 Ghazvini'/>


    <APLhistory  studnetName = 'Mehrad4 Rezayazdi'/>


    <APLhistory  studnetName = 'Mahta4 Rezayazdi'/>


    </ScrollView>

  );
}
}
