import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';
//import ApiController from '../controller/ApiController';


export default class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  constructor(props) {
    super(props);

  this.state = {
    email: '', password: ''
  }
}
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signIn = async () => {

    this.props.navigation.navigate('SignIn');
  }

  signUp = async () => {

    this.props.navigation.navigate('Login');
  }

  render()
  {
    return (
      <ImageBackground source={require ("../assets/images/foto.jpg")} style={{width: '100%', height: '100%'}}>
    <View style={styles.container1}>
      <View style={styles.image}>
        <Image
       style={styles.image}
       source={require ("../assets/images/logo.jpg")}
        />
      </View>
      </View>
      <View style={styles.container2}>
      <View style={styles.btn}>
        <Button
          color='#6584be'
          title='Sign In'
          onPress={this.signIn}
        />
      </View>
        <View style={styles.btn}>
        <Button
          color='#6584be'
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>
    </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 350,
    height: 45,
    backgroundColor: '#6584be',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '200',
  },
  image: {
    width: 240,
    height: 250,
      borderRadius: 20
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2: {
    flex: 1,
    margin: 3,
    alignItems: 'center',
  }
})
