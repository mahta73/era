import React ,{Component} from 'react';
import {
   Text,
   View,
   TouchableHighlight,
 } from 'react-native';

import Styles from '../style';

import { StackNavigator } from 'react-navigation';

export default class Classes extends Component {
  static navigationOptions = {
   title: 'classes',
 };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.container}>

        <TouchableHighlight
          onPress={()=>navigate('studentMainPage')}
          style={Styles.Button}
          >
              <Text
                style={Styles.ButtonView}
                >
                Class A
              </Text>

        </TouchableHighlight>

        <TouchableHighlight
          onPress={this._ChangePage}
          style={Styles.Button}
          >
              <Text
                style={Styles.ButtonView}
                >
                Class B
              </Text>

        </TouchableHighlight>


        <TouchableHighlight
          onPress={this._ChangePage}
          style={Styles.Button}
          >
              <Text
                style={Styles.ButtonView}
                >
                Class C
              </Text>

        </TouchableHighlight>



        <TouchableHighlight
          onPress={this._ChangePage}
          style={Styles.Button}
          >
              <Text
                style={Styles.ButtonView}
                >
                Class D
              </Text>

        </TouchableHighlight>



      </View>
    );
  }
}
