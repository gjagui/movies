import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';

const MOVIE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d0b64143&s=";

export default class SearchFilm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      search: "",
      movies: []
    };
  }
    
  static navigationOptions = { title: 'Películas a calificar' };

  updateSearch = search => {

    let movies = [];

    if (search.length > 3) {

      fetch(`${MOVIE_URL}${search}`)
      .then(result => result.json())
      .then(movies_json => {
        if (movies_json.Response == "True") {
          movies_json.Search.forEach(movie_value => {
            let { Poster, Title, Year, imdbID } = movie_value;
            let movie = {Poster, Title, Year, imdbID};
            movies.push(movie);
          });
          this.setState({ movies });
        }
      })
      .catch(error => console.log(error));
    }

    this.setState({ search, movies });
  }
  
  render() {

    let lista = <Text></Text>;

    if (this.state.movies.length > 0) {
      lista = this.state.movies.map((movie, i) => (
        <ListItem
          key={i}
          leftAvatar = {{ source: { uri: movie.Poster } }}
          title = {movie.Title}
          subtitle = {movie.Year}
          onPress = {() => console.log("onPress:", movie.imdbID)}
        />
      ));
    }

    return (
      <ScrollView>
      <SearchBar
        placeholder = "¿Qué película te gustaría calificar?"
        onChangeText = { this.updateSearch }
        value = { this.state.search }  
        lightTheme = { true }/>
        {lista}
      </ScrollView>
      );
    }
}
