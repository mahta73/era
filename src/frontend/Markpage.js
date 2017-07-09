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

    <StudentMarkPage  studnetName = 'Peyman Ghazvini'/>



    <StudentMarkPage  studnetName = 'Saman Ghazvini'/>



    <StudentMarkPage   studnetName = 'Mehrad Rezayazdi'/>



    <StudentMarkPage  studnetName = 'Mahta Rezayazdi'/>



    <StudentMarkPage  studnetName = 'Peyman2 Ghazvini'/>



    <StudentMarkPage  studnetName = 'Saman2 Ghazvini'/>



    <StudentMarkPage  studnetName = 'Mehrad2 Rezayazdi'/>



    <StudentMarkPage  studnetName = 'Mahta2 Rezayazdi'/>



    <StudentMarkPage  studnetName = 'Peyman3 Ghazvini'/>



    <StudentMarkPage  studnetName = 'Saman3 Ghazvini'/>



    <StudentMarkPage  studnetName = 'Mehrad3 Rezayazdi'/>



    <StudentMarkPage  studnetName = 'Mahta3 Rezayazdi'/>



    <StudentMarkPage  studnetName = 'Peyman4 Ghazvini'/>



    <StudentMarkPage  studnetName = 'Saman4 Ghazvini'/>



    <StudentMarkPage  studnetName = 'Mehrad4 Rezayazdi'/>



    <StudentMarkPage  studnetName = 'Mahta4 Rezayazdi'/>

    </ScrollView>
  );
}
}
