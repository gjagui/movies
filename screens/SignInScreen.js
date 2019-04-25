import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native'

import ApiController from '../controller/ApiController';

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  constructor(props) {
    super(props);
  state = {
    username: '', password: '',autorizado: false
  }
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signIn = async () => {
    this.state.autorizado = false;
    const { username, password,autorizado} = this.state
    ApiController.SignIn(this.state,this.okBusqueda.bind(this))
    if(this.state.autorizado){
      console.log("contecta2");
    }
    else{
      this.setState({autorizado : false});
      console.log("juira hacker");
    } //REVISAR ESTOOO

  }

  changePwd = async () => {
    this.props.navigation.navigate('ChangePwd');
  }
 okBusqueda(user)
 {
   if (user) {
        console.log("todo ok");
        this.props.navigation.navigate('Comments',{username: this.state.username});
        }
        //this.setState({autorizado : true});
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
          onChangeText={val => this.onChangeText('username', val)}
          placeholderTextColor='gray'
                  />
        <TextInput
          style={styles.input}
          placeholder='Contraseña'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('password', val)}

        />
        <View style={styles.container2}>
          <View style={styles.btn}>
          <Button
            title='Sign In'
            onPress={this.signIn}
          />
          </View>
          <View style={styles.btn2}>
          <Button
            title='Cambiar contraseña'
            onPress={this.changePwd}
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
  btn: {
  width: 150,
  height: 45,
  backgroundColor: 'white',
  margin: 10,
  padding: 8,
  color: 'black',
  borderRadius: 14,
  fontSize: 18,
  fontWeight: '200',
  },
  btn2: {
  width: 150,
  height: 35,
  backgroundColor: 'white',
  //margin: 10,
  //padding: 8,
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
  }
})
