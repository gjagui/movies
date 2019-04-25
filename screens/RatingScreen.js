import { Rating } from 'react-native-elements';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Text
} from 'react-native'

export default class RatingScreen extends React.Component {
    state = {
        rating: 0,
        comentario: ''
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating);
        this.setState({rating : rating})
    }

    render() {
        return (
          <View style={styles.container}>

            <ImageBackground source={require ("../assets/images/foto.jpg")} style={{width: '100%', height: '100%'}}>

            <Rating
           showRating
           onFinishRating={this.ratingCompleted.bind(this)}
           style={{ paddingVertical: 10 }}/>

            <TextInput
          style={styles.input}
          placeholder='Escribe un comentario ...'
          textAlignVertical='top'
          alignItems= "center"
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('comentario', val)}/>

          </ImageBackground>
          </View>
       );
    }

}

const styles = StyleSheet.create({
    input: {
      width: 390,
      height: 250,
      backgroundColor: 'white',
      margin: 10,
      padding: 8,
      color: 'black',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '200',
    },

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})
