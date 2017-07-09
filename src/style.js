import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
    flex: 1,
    backgroundColor: '#ebebef',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },
  ButtonView : {
    color:'white',
    fontSize: 18,
  },
  ButtonTextView : {
    color:'white',
    fontWeight: 'bold',
  },
  Button: {
    backgroundColor:"#599bad",
    width: 200,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    margin:30,
  },
  headTxt: {
    fontSize: 20,
    marginTop:20,
    fontWeight: 'bold',
    color: '#379cc6',
  },
  inputStyle:{
    marginTop:40,
    marginLeft:10,
    marginRight:10,
    padding:10,
    borderColor: 'gray',
    borderWidth: 1,
    width:350,
    height:40,
    alignSelf: 'center',
  },
  inputMark:{
    padding:10,
    height: 40,
    width:50,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight:40,
    flex:1,
  },
  nameStyle:{
    color: "#599bad",
    flex:2,
    paddingLeft:10,
  },
  presentStyle:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#32CD32',
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    flex:1,
    margin:5,

  },
  absentStyle:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FF0000',
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    flex:1,
    margin:5,

  },
  lateStyle:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#c97a4f',
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    flex:1,
    margin:5,
  },
  resultView:{
    flex:1,
    margin:2,
  },
  Row:{
  flex:1,
  flexDirection: 'row',
  alignItems:'center',
  justifyContent:'center',
},
markHistoryView:{
  color:'#32CD32',
  justifyContent:'center',
  alignItems: 'center',
},
scrollView:{
  borderColor: 'black',
  borderWidth: 1,
  width:100,
  height:40,
  marginRight:10,

},

});

export default Styles;
