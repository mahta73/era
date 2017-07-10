import React from 'react';
import { ScrollView} from 'react-native';
import firebaseRef from '../backend/firebase';
import Styles from '../style';
import StudentBox from './studentBox';

export default class APL  extends React.Component{
constructor(props){
  super(props);
}
render(){
  return(
   <ScrollView>

    <StudentBox  studnetName = 'Peyman Ghazvini' Wclass='A'/>



    <StudentBox  studnetName = 'Saman Ghazvini' Wclass='B'/>



    <StudentBox   studnetName = 'Mehrad Rezayazdi' Wclass='A'/>



    <StudentBox  studnetName = 'Mahta Rezayazdi' Wclass='A'/>



    <StudentBox  studnetName = 'Peyman2 Ghazvini' Wclass='A'/>



    <StudentBox  studnetName = 'Saman2 Ghazvini' Wclass='A'/>



    <StudentBox  studnetName = 'Mehrad2 Rezayazdi' Wclass='A'/>



    <StudentBox  studnetName = 'Mahta2 Rezayazdi' Wclass='A'/>



    <StudentBox  studnetName = 'Peyman3 Ghazvini'Wclass='A'/>



    <StudentBox  studnetName = 'Saman3 Ghazvini' Wclass='A'/>



    <StudentBox  studnetName = 'Mehrad3 Rezayazdi' Wclass='A'/>



    <StudentBox  studnetName = 'Mahta3 Rezayazdi' Wclass='A'/>


    <StudentBox  studnetName = 'Peyman4 Ghazvini' Wclass='A'/>



    <StudentBox  studnetName = 'Saman4 Ghazvini' Wclass='A'/>



    <StudentBox  studnetName = 'Mehrad4 Rezayazdi' Wclass='A'/>



    <StudentBox  studnetName = 'Mahta4 Rezayazdi' Wclass='A'/>

    </ScrollView>
  );
}
}
