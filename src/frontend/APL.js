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

    <StudentBox  studnetName = 'Peyman Ghazvini'/>



    <StudentBox  studnetName = 'Saman Ghazvini'/>



    <StudentBox   studnetName = 'Mehrad Rezayazdi'/>



    <StudentBox  studnetName = 'Mahta Rezayazdi'/>



    <StudentBox  studnetName = 'Peyman2 Ghazvini'/>



    <StudentBox  studnetName = 'Saman2 Ghazvini'/>



    <StudentBox  studnetName = 'Mehrad2 Rezayazdi'/>



    <StudentBox  studnetName = 'Mahta2 Rezayazdi'/>



    <StudentBox  studnetName = 'Peyman3 Ghazvini'/>



    <StudentBox  studnetName = 'Saman3 Ghazvini'/>



    <StudentBox  studnetName = 'Mehrad3 Rezayazdi'/>



    <StudentBox  studnetName = 'Mahta3 Rezayazdi'/>


    <StudentBox  studnetName = 'Peyman4 Ghazvini'/>



    <StudentBox  studnetName = 'Saman4 Ghazvini'/>



    <StudentBox  studnetName = 'Mehrad4 Rezayazdi'/>



    <StudentBox  studnetName = 'Mahta4 Rezayazdi'/>

    </ScrollView>
  );
}
}
