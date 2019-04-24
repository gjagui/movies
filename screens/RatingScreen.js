import { Rating } from 'react-native-elements';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet
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
          
            <Rating
           showRating
           onFinishRating={this.ratingCompleted.bind(this)}
           style={{ paddingVertical: 10 }}/>
            
            <TextInput
          style={styles.input}
          placeholder='Escribe un comentario ...'
          textAlignVertical='top'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('comentario', val)}/>
          
          </View>
       );
    }

}

const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 250,
      backgroundColor: '#42A5F5',
      margin: 10,
      padding: 8,
      color: 'white',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})