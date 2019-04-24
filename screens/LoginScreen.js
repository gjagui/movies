import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';
//import ApiController from '../controller/ApiController';


export default class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Equipos a calificar',
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
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
       style={styles.image}
       source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/41cB04ewCyL._SY355_.jpg'}}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title='Sign In'
          onPress={this.signIn}
        />
      </View>
        <View style={styles.btn}>
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  image: {
    width: 300,
    height: 300
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
