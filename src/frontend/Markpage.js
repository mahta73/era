import React from 'react';
import { ScrollView } from 'react-native';
import firebaseRef from '../backend/firebase';
import Styles from '../style';
import StudentMarkPage from './studentmark';

export default class Markpage  extends React.Component{
constructor(props){
  super(props);
}
render(){
  return(
    <ScrollView>

    <StudentMarkPage  studnetName = 'Peyman Ghazvini' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Saman Ghazvini' Wclass='B'/>



    <StudentMarkPage   studnetName = 'Mehrad Rezayazdi' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Mahta Rezayazdi' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Peyman2 Ghazvini' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Saman2 Ghazvini' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Mehrad2 Rezayazdi' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Mahta2 Rezayazdi' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Peyman3 Ghazvini' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Saman3 Ghazvini' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Mehrad3 Rezayazdi' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Mahta3 Rezayazdi' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Peyman4 Ghazvini' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Saman4 Ghazvini' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Mehrad4 Rezayazdi' Wclass='A'/>



    <StudentMarkPage  studnetName = 'Mahta4 Rezayazdi' Wclass='A'/>

    </ScrollView>
  );
}
}
