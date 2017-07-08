import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonView : {
    color:'white',
    fontSize: 18,
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
    margin:10,
    padding:10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  Row: {
    flex: 1,
    flexDirection: 'row',
  },
  detailRow: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Styles;
