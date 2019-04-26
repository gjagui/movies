import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Button, ImageBackground } from 'react-native';
import { ListItem } from 'react-native-elements';
import ApiController from '../controller/ApiController';
import { Rating } from 'react-native-ratings';

export default class UserComments extends Component {

  static navigationOptions = { title: 'Mis Comentarios' };

  constructor(props) {
    super(props);
    this.state = {
      comments: {},
      username: this.props.navigation.getParam('username')
    };
  };

  componentDidMount = () => {
    this.fetchUserComment(this.state.username);
  };

  search = () => {
    this.props.navigation.navigate('Search', { username: this.state.username });
  }

  fetchUserComment = async (username) => {
    try {
      let comments = await ApiController.getUserComments(username);
      this.setState({ comments });
    }
    catch (error) {
      console.log(error);
    }
  };

  render() {
    let comments = <Text></Text>;

    if (this.state.comments.length > 0) {

      comments = this.state.comments.map((comment,i) => {

        return (

          
          <ListItem
            key={i}
            title={comment.title}
            subtitle={comment.comment}
            rightElement={
              <Rating
                imageSize = {20}
                readonly
                startingValue={comment.score}
              />
            
            }
            
          />

        );
      });
    }

    return (
      <ScrollView>
        <ImageBackground source={require("../assets/images/foto.jpg")} style={{ width: '100%', height: '100%' }}>
          <View style={styles.container2}>
            <View style={styles.btn}>
              <Button
                color='#6584be'
                title='Buscar Peliculas'
                onPress={this.search}
              />
              </View>
              <Text h1 style={styles.texto}>Historial de comentarios</Text>
            </View>
            <Text h1 style={styles.texto}>Estos son los comentarios que hiciste:</Text>
          {comments}
        </ImageBackground>
      </ScrollView>
    )
  };
}

const styles = StyleSheet.create({
  comment: {
  width: 300,
  height: 100,
  backgroundColor: 'white',
  margin: 10,
  padding: 8,
  color: 'black',
  borderRadius: 14,
  fontSize: 18,
  fontWeight: '200',
},
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
  width: 250,
  height: 200,
  borderRadius: 10

},
texto:{
  fontSize: 20,
  color: 'white'

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
}
})
