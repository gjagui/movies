import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native'

export default class SignUp extends React.Component {
  state = {
    email: '', password: '', password2: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { email, password } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
    ApiController.GuardarSignUp(this.state)  //REVISAR ESTOOO
  }

  render() {
    return (
      <ImageBackground source={require ("../assets/images/foto.jpg")} style={{width: '100%', height: '100%'}}>
      <View style={styles.container1}>  
        <Image
       style={styles.image}
       source={require ("../assets/images/logo.jpg")}
        />
        </View>
        <View style={styles.container2}>
        <TextInput
          style={styles.input}
          placeholder='Correo Electrónico'
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Contraseña'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Re-Contraseña'
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('password2', val)}
        />

        <View style={styles.container3}>
        <View style={styles.btn}>
        <Button
        color='rgb(50,156,129)'
          style={styles.button}
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>
      </View>
      </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 45,
    backgroundColor: 'white',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '200',
  },
  image: {
    width: 190,
    height: 200,
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
    alignItems: 'center'
  },
  container3: {
    flex: 1,
    margin: 3,
    alignItems: 'center'
  },
  btn: {
    width: 350,
    height: 45,
    backgroundColor: 'rgb(50,156,129)',
    margin: 10,
    padding: 8,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '200',
  }
})
