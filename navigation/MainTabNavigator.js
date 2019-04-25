import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LoginScreen from '../screens/HomeScreen';
import HomeScreen from '../screens/LoginScreen';
import SearchFilmScreen from '../screens/SearchFilmScreen';
import RatingScreen from '../screens/RatingScreen';
import ChangePwdScreen from '../screens/ChangePwdScreen';
import SignInScreen from '../screens/SignInScreen';


const HomeStack = createStackNavigator({
  Home: {screen :HomeScreen},
  Login: {screen : LoginScreen},
  SignIn: {screen : SignInScreen},
  Movie: {screen :RatingScreen},
  ChangePwd: {screen :ChangePwdScreen},
  Search:{screen: SearchFilmScreen}
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({

  HomeStack,


});
