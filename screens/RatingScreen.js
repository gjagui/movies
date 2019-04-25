import { Rating } from 'react-native-elements';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  Button
} from 'react-native'

const MOVIE_URL = "http://www.omdbapi.com/?apikey=d0b64143&i=";
const COMMENTS_URL = "http://gustavomovies2.herokuapp.com/comments/imdbID/";

export default class RatingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: this.props.navigation.getParam('movieData'),
      title: this.props.navigation.getParam('title'),
      username: this.props.navigation.getParam('username'),
      comment_rating: 0,
      rating: 0,
      comments: [],
      votes: 0,
      comentario: "",
    }
  }

  componentDidMount = () => {
    this.fetchComments(this.state.movie.imdbID);
  }

  fetchComments = () => {
    fetch(`${COMMENTS_URL}${this.state.movie.imdbID}`)
      .then(result => result.json())
      .then(comments => { this.setState({ comments: comments.comments, rating: comments.rating, votes: comments.votes }) })
      .catch(error => console.log(error));
  }

  onChangeText = (key, val) => this.setState({ [key]: val });

  ratingCompleted = (rating) => this.setState({ comment_rating: rating });

  guardarCalificacion() {
    console.log("Entre");
    console.log("Rating: " + this.state.rating);
    console.log("Comentario: " + this.state.comentario);
  }

  render() {

    let comments = <Text></Text>;

    if (this.state.comments.length > 0) {

      comments = this.state.comments.map((comments) => {

        return (
          <View key={comments._id}>

            <Text>
              Usuario: {comments.username}
              Voto: {comments.votes}
              Comentario: {comments.comment}
            </Text>

          </View>
        );
      });
    }

    return (
      <ScrollView>

        <ImageBackground source={{ uri: this.state.movie.Poster }} style={{ width: '100%', height: '100%' }}>
          <Text>Titulo: {this.state.title} Rating: {this.state.rating} Votos: {this.state.votes}</Text>

          {comments}

          <TextInput
            style={styles.input}
            placeholder='Escribe un comentario ...'
            textAlignVertical='top'
            alignItems="center"
            autoCapitalize="none"
            placeholderTextColor='gray'
            onChangeText={val => this.onChangeText('comentario', val)} />

          <Rating
            showRating
            onFinishRating={this.ratingCompleted.bind(this)}
            style={{ paddingVertical: 10 }}
          />

          <Button
            title='Calificar'
            onPress={this.guardarCalificacion.bind(this)}
            borderRadius={10}
          />
        </ImageBackground>

      </ScrollView>
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


//

// import { Rating } from 'react-native-elements';
// import React, { Component } from 'react';
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   ImageBackground,
//   Text
// } from 'react-native'
//
// export default class RatingScreen extends React.Component {
//     state = {
//         rating: 0,
//         comentario: ''
//     }
//
//     onChangeText = (key, val) => {
//         this.setState({ [key]: val })
//     }
//
//     ratingCompleted(rating) {
//         console.log("Rating is: " + rating);
//         this.setState({rating : rating})
//     }
//
//     render() {
//         return (
//           <View style={styles.container}>
//
//             <ImageBackground source={require ("../assets/images/foto.jpg")} style={{width: '100%', height: '100%'}}>
//
//             <Rating
//            showRating
//            onFinishRating={this.ratingCompleted.bind(this)}
//            style={{ paddingVertical: 10 }}/>
//
//             <TextInput
//           style={styles.input}
//           placeholder='Escribe un comentario ...'
//           textAlignVertical='top'
//           alignItems= "center"
//           autoCapitalize="none"
//           placeholderTextColor='gray'
//           onChangeText={val => this.onChangeText('comentario', val)}/>
//
//           </ImageBackground>
//           </View>
//        );
//     }
//
// }
//
// const styles = StyleSheet.create({
//     input: {
//       width: 390,
//       height: 250,
//       backgroundColor: 'white',
//       margin: 10,
//       padding: 8,
//       color: 'black',
//       borderRadius: 14,
//       fontSize: 18,
//       fontWeight: '200',
//     },
//
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'
//     }
// })
