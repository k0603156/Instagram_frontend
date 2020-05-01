/**
 * Instagram app
 *
 * @format
 */
'use strict';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';

export default class WelcomePage extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View>
        <Text>
          Apps
          <Icon name="rocket" size={30} color="#900" />
        </Text>
      </View>
    );
  }
}
