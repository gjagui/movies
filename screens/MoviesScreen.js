import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Image
} from 'react-native'

export default class MoviesScreen extends Component {
    static navigationOptions = {
      title: 'Peliculas',
    }
      constructor(props) {
        super(props);
        this.state = {
          titleText: "Peliculas/Series relacionadas con", /* + PALABRA DE LA BUSQUEDA*/
        };
    };


    

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text
          
        />
      </ScrollView>
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
