import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen';
import SignInScreen from '../screens/SignInScreen';
import SearchFilmScreen from '../screens/SearchFilmScreen';
import RatingScreen from '../screens/RatingScreen';
import UserCommentsScreen from '../screens/UserCommentsScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Registro',
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

const LoginStack = createStackNavigator({
  Login: {screen : LoginScreen}
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Home',
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

const SignInStack = createStackNavigator({
  SignIn: {screen : SignInScreen}
});

SignInStack.navigationOptions = {
  tabBarLabel: 'SignIn',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const MoviesStack = createStackNavigator({
  Movies: {screen : MoviesScreen}
});

MoviesStack.navigationOptions = {
  tabBarLabel: 'Movies',
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

const RatingStack = createStackNavigator({
  Rating: {screen : RatingScreen}
});

RatingStack.navigationOptions = {
  tabBarLabel: 'Rating',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SearchFilmStack = createStackNavigator({
  SearchFilm: {screen : SearchFilmScreen}
});

SearchFilmStack.navigationOptions = {
  tabBarLabel: 'SearchFilm',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const UserCommentsStack = createStackNavigator({
  UserComments: {screen : UserCommentsScreen}
});

UserCommentsStack.navigationOptions = {
  tabBarLabel: 'UserComments',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  LoginStack,
  HomeStack,
  SignInStack,
  SearchFilmStack,
  RatingStack,
  UserCommentsStack
});

