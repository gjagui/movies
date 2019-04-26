import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import ApiController from '../controller/ApiController';

export default class SearchFilm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      search: "",
      movies: [],
      username: this.props.navigation.getParam('username')
    };
  }
    
  static navigationOptions = { title: 'Películas a calificar' };

  updateSearch = async search => {
    if (search.length > 4) {
      try {
        let movies = await ApiController.searchMovies(search);
        this.setState({ search, movies });
        }
        catch (error) {
          console.log(error);
        }
      }
      else this.setState({ search, movies: [] });
    }

  _onPressButton = (movie) => {
    this.props.navigation.navigate('Movie',{username: this.state.username, movieData: movie, title: movie.Title});
  }
  
  render() {

    let lista = <Text></Text>;

    if (this.state.movies.length > 0) {
      lista = this.state.movies.map((movie, i) => (
        <ListItem
          key={i}
          leftAvatar = {{ source: { uri: movie.Poster } }}
          title = { movie.Title }
          subtitle = { movie.Year }
          onPress = { () => this._onPressButton(movie) }
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