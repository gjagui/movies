import React, { Component }               from 'react';
import { ScrollView, View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { SearchBar }                      from 'react-native-elements';

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

    if (search.length > 4) {

      fetch(`${MOVIE_URL}${search}`)
      .then(result => result.json())
      .then(movies_json => {
        if (movies_json.Response == "True") {
          movies_json.Search.forEach(movie_value => {
            let {Poster, Title, Year} = movie_value;
            let movie = {Poster, Title, Year};
            movies.push(movie);
          });
          this.setState({ movies });
        }
      })
      .catch(error => console.log(error));
    }
    this.setState({ search });
  }
  
  render() {
    
    let cards = <Text></Text>;

    if (this.state.movies.length > 0) {

      cards = this.state.movies.map((movie) => {
        
        return (
            <View key= {movie.Title} style={ styles.card }>
            
              <TouchableHighlight onPress={() => this._onPressButton}>
              
                <Image source={{uri: movie.Poster}} style={{width: 150, height: 150}} />

              </TouchableHighlight>

              <Text>{movie.Title} - {movie.Year} </Text>
            
            </View>
        );
      });  
    }
    
    return (
      <View>
      <SearchBar
        placeholder = "¿Qué película te gustaría calificar?"
        onChangeText = { this.updateSearch }
        value = { this.state.search }  
        lightTheme ={ true }
        />
        <ScrollView>{ cards }</ScrollView>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center'
  }
});