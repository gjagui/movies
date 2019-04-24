import { SearchBar } from 'react-native-elements';
import React, { Component } from 'react';
import {
    View,
    Button,
    TextInput,
    StyleSheet,
    Image
} from 'react-native'

export default class SearchFilm extends React.Component {
    static navigationOptions = {
        title: 'Películas a calificar',
    };

    state = {
        search: '',
    }

    updateSearch = search => {
      this.setState({ search });
    };
  
    render() {
      const { search } = this.state;
      
      return (
        
        <SearchBar
          placeholder="¿Qué película te gustaría calificar?"
          onChangeText={this.updateSearch}
          value={search}  
          lightTheme={true}        
        />
      );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1
    },
    headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
    },
    item: {
      color: 'white',
      backgroundColor: "#b478ed",
      fontSize: 20,
      marginTop: 3,
      padding:10,
    },
  textInput: {
      height: 30,
      borderWidth: 1,
      borderColor: '#cecece',
      marginBottom: 10,
      marginHorizontal: 10
  },
  content: {
      zIndex: 1
  },
  footerContainer: {
     flexDirection: 'row',
     paddingHorizontal: 10,
     paddingVertical: 10,
     backgroundColor: '#555566' 
  },
  imageAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 5
  },
  listContainer: {
      marginHorizontal: 10
  },
  text: {
      color: '#fff'
  },
  containerCell: {
      marginBottom: 10
  },
  textTitle: {
      fontSize: 13
  },
  textBy: {
      fontSize: 12
  },
  textMenu: {
      fontSize: 20,
      color: '#fff'
  }
  });
  