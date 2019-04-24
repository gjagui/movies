import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LoginScreen from '../screens/HomeScreen';
import HomeScreen from '../screens/LoginScreen';
import MoviesScreen from '../screens/MoviesScreen';
//import RatingScreen from '../screens/RatingScreen';
//import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';


const HomeStack = createStackNavigator({
  Home: {screen :HomeScreen},
  Login: {screen : LoginScreen},
  SignIn: {screen : SignInScreen}
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

// const LoginStack = createStackNavigator({
//   Login: {screen : LoginScreen}
// });
//
// LoginStack.navigationOptions = {
//   tabBarLabel: 'Login',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),

//};

// const SignInStack = createStackNavigator({
//   SignIn: {screen : SignInScreen}
// });
//
// SignInStack.navigationOptions = {
//   tabBarLabel: 'SignIn',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   ),
// };
//
// const MoviesStack = createStackNavigator({
//   Movies: {screen : MoviesScreen}
// });
//
// MoviesStack.navigationOptions = {
//   tabBarLabel: 'Movies',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };


export default createBottomTabNavigator({
  //LoginStack,
  HomeStack,
  //SignInStack

});
