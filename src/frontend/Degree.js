import React ,{Component} from 'react';
import {
   Text,
   View,
   TouchableHighlight,
 } from 'react-native';
import Styles from '../style';
import { StackNavigator } from 'react-navigation';
import Classes from './Classes';


export default class Degree extends Component {
  //    *** navigationOptions ***
  static navigationOptions = {
      title: 'Degrees',
  };

//changing degree page to class page



  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={Styles.container}>

        <TouchableHighlight
          onPress={() => navigate('Classes')}
          style={Styles.Button}
          >
              <Text
                style={Styles.ButtonView}
                >
                Preparatory
              </Text>

        </TouchableHighlight>

        <TouchableHighlight
          onPress={this._ChangePage}
          style={Styles.Button}
          >
              <Text
                style={Styles.ButtonView}
                >
                Bachelor Degree
              </Text>

        </TouchableHighlight>


        <TouchableHighlight
          onPress={this._ChangePage}
          style={Styles.Button}
          >
              <Text
                style={Styles.ButtonView}
                >
                Master Degree
              </Text>

        </TouchableHighlight>



        <TouchableHighlight
          onPress={this._ChangePage}
          style={Styles.Button}
          >
              <Text
                style={Styles.ButtonView}
                >
                PHD Degree
              </Text>

        </TouchableHighlight>



      </View>
    );
  }
}
