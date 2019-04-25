import { Rating } from 'react-native-elements';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  Button,
  Image
} from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';

const MOVIE_URL = "http://www.omdbapi.com/?apikey=d0b64143&i=";
const COMMENTS_URL = "http://gustavomovies2.herokuapp.com/comments/imdbID/";
const SAVECOMMENTS_URL = "http://gustavomovies2.herokuapp.com/comments/Create/"

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
      comentario: '',
    }
  }

  componentWillMount = () => {
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

    texto = { title: this.state.title, username: this.state.username, comment: this.state.comentario, score: this.state.comment_rating, imdbID: this.state.movie.imdbID };
    fetch(`${SAVECOMMENTS_URL}`, {
      method: 'POST', // or 'PUT'
      mode: "cors",
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({title: this.state.title, username: username1, comment: this.state.comentario, score: this.state.rating}) // data can be `string` or {object}!
      body: JSON.stringify(texto),

    }).then((response) => {
      console.log(texto);
      this.props.navigation.navigate('Movie',{username: this.state.username, movieData: this.state.movie, title: this.state.Title});
      return response.json();
    }).then(responseData => {
      console.log(responseData);
      this.props.navigation.navigate('Movie',{username: this.state.username, movieData: this.state.movie, title: this.state.Title});

      //console.log("Recibi datos");
    }).catch((err) => {
      console.log(err);

    });




  }


  render() {

    let comments = <Text></Text>;

    if (this.state.comments.length > 0) {


      comments = this.state.comments.map((comment) => {

        return (
          <View key={comment._id} style={styles.comment}>
            <Text style={styles.user}>{comment.username}{"\n"}</Text>

            <Text>Comentario: {comment.comment}{"\n"}</Text>
            <Text>Estrellas: {comment.score}</Text>
          </View>

        );
      });
    }

    return (

      <View style={styles.container}>
        <ScrollView>
          <ImageBackground source={require("../assets/images/foto.jpg")} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{ uri: this.state.movie.Poster }}
              />
              <View style={styles.container}>
                <Text style={styles.title}>
                  {this.state.title}
                </Text>
                <Text style={styles.subTitle}>
                  Rating promedio: {this.state.rating}      Votos: {this.state.votes}
                </Text>
              </View>
            </View>
            <View style={styles.commentContainer}>
              <Rating
                onFinishRating={this.ratingCompleted.bind(this)}
                style={{ paddingVertical: 10 }}
              />
              <TextInput
                style={styles.input}
                placeholder='Escribe un comentario ...'
                textAlignVertical='top'
                alignItems="center"
                autoCapitalize="none"
                placeholderTextColor='gray'
                onChangeText={val => this.onChangeText('comentario', val)} />
              <Button
                title='Calificar'
                onPress={this.guardarCalificacion.bind(this)}
                borderRadius={10}
              />
            </View>


            {comments}
          </ImageBackground>
        </ScrollView>
      </View>
    );


  }

}

const styles = StyleSheet.create({
  input: {
    width: 390,
    height: 200,
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
  },
  image: {
    width: 190,
    height: 300,
    borderRadius: 20,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentContainer: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 14,
    width: 400,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'rgb(50,156,29)'
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    textShadowColor: 'yellow',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  subTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    textShadowColor: 'white',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  comment: {
    width: 400,
    height: 100,
    backgroundColor: 'white',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
  },
  user: {
    fontWeight: 'normal',
  }
})


// import { Rating } from 'react-native-elements';
// import React, { Component } from 'react';
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   ImageBackground,
//   Text,
//   ScrollView,
//   Button
// } from 'react-native'
//
// const MOVIE_URL = "http://www.omdbapi.com/?apikey=d0b64143&i=";
// const COMMENTS_URL = "http://gustavomovies2.herokuapp.com/comments/imdbID/";
//
// export default class RatingScreen extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       movie: this.props.navigation.getParam('movieData'),
//       title: this.props.navigation.getParam('title'),
//       username: this.props.navigation.getParam('username'),
//       comment_rating: 0,
//       rating: 0,
//       comments: [],
//       votes: 0,
//       comentario: "",
//     }
//   }
//
//   componentDidMount = () => {
//     this.fetchComments(this.state.movie.imdbID);
//   }
//
//   fetchComments = () => {
//     fetch(`${COMMENTS_URL}${this.state.movie.imdbID}`)
//       .then(result => result.json())
//       .then(comments => { this.setState({ comments: comments.comments, rating: comments.rating, votes: comments.votes }) })
//       .catch(error => console.log(error));
//   }
//
//   onChangeText = (key, val) => this.setState({ [key]: val });
//
//   ratingCompleted = (rating) => this.setState({ comment_rating: rating });
//
//   guardarCalificacion() {
//     console.log("Entre");
//     console.log("Rating: " + this.state.rating);
//     console.log("Comentario: " + this.state.comentario);
//   }
//
//   render() {
//
//     let comments = <Text></Text>;
//
//     if (this.state.comments.length > 0) {
//
//       comments = this.state.comments.map((comments) => {
//
//         return (
//           <View key={comments._id}>
//
//             <Text>
//               Usuario: {comments.username}
//               Voto: {comments.votes}
//               Comentario: {comments.comment}
//             </Text>
//
//           </View>
//         );
//       });
//     }
//
//     return (
//       <ScrollView>
//
//         <ImageBackground source={{ uri: this.state.movie.Poster }} style={{ width: '100%', height: '100%' }}>
//           <Text>Titulo: {this.state.title} Rating: {this.state.rating} Votos: {this.state.votes}</Text>
//
//           {comments}
//
//           <TextInput
//             style={styles.input}
//             placeholder='Escribe un comentario ...'
//             textAlignVertical='top'
//             alignItems="center"
//             autoCapitalize="none"
//             placeholderTextColor='gray'
//             onChangeText={val => this.onChangeText('comentario', val)} />
//
//           <Rating
//             showRating
//             onFinishRating={this.ratingCompleted.bind(this)}
//             style={{ paddingVertical: 10 }}
//           />
//
//           <Button
//             title='Calificar'
//             onPress={this.guardarCalificacion.bind(this)}
//             borderRadius={10}
//           />
//         </ImageBackground>
//
//       </ScrollView>
//     );
//   }
//
// }
//
// const styles = StyleSheet.create({
//   input: {
//     width: 390,
//     height: 250,
//     backgroundColor: 'white',
//     margin: 10,
//     padding: 8,
//     color: 'black',
//     borderRadius: 14,
//     fontSize: 18,
//     fontWeight: '200',
//   },
//
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })
//
//
// //
//
// // import { Rating } from 'react-native-elements';
// // import React, { Component } from 'react';
// // import {
// //   View,
// //   TextInput,
// //   StyleSheet,
// //   ImageBackground,
// //   Text
// // } from 'react-native'
// //
// // export default class RatingScreen extends React.Component {
// //     state = {
// //         rating: 0,
// //         comentario: ''
// //     }
// //
// //     onChangeText = (key, val) => {
// //         this.setState({ [key]: val })
// //     }
// //
// //     ratingCompleted(rating) {
// //         console.log("Rating is: " + rating);
// //         this.setState({rating : rating})
// //     }
// //
// //     render() {
// //         return (
// //           <View style={styles.container}>
// //
// //             <ImageBackground source={require ("../assets/images/foto.jpg")} style={{width: '100%', height: '100%'}}>
// //
// //             <Rating
// //            showRating
// //            onFinishRating={this.ratingCompleted.bind(this)}
// //            style={{ paddingVertical: 10 }}/>
// //
// //             <TextInput
// //           style={styles.input}
// //           placeholder='Escribe un comentario ...'
// //           textAlignVertical='top'
// //           alignItems= "center"
// //           autoCapitalize="none"
// //           placeholderTextColor='gray'
// //           onChangeText={val => this.onChangeText('comentario', val)}/>
// //
// //           </ImageBackground>
// //           </View>
// //        );
// //     }
// //
// // }
// //
// // const styles = StyleSheet.create({
// //     input: {
// //       width: 390,
// //       height: 250,
// //       backgroundColor: 'white',
// //       margin: 10,
// //       padding: 8,
// //       color: 'black',
// //       borderRadius: 14,
// //       fontSize: 18,
// //       fontWeight: '200',
// //     },
// //
// //     container: {
// //       flex: 1,
// //       justifyContent: 'center',
// //       alignItems: 'center'
// //     }
// // })
