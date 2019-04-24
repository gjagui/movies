import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';
import ApiController from '../controller/ApiController';

export default class SignUp extends React.Component {
  state = {
    username: '', password: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password } = this.state
    // try {
    //   // here place your signup logic
    //   console.log('user successfully signed up!: ', success)
    // } catch (err) {
    //   console.log('error signing up: ', err)
    // }
    ApiController.GuardarSignUp(this.state)  //REVISAR ESTOOO
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
       style={styles.image}
       source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/41cB04ewCyL._SY355_.jpg'}}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password2'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          //onChangeText={val => this.onChangeText('password2', val)}
        />
        <Button
          style={{color: 'green'}}
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
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
