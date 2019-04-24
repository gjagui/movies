import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Dimensions,
  Image,
  Animated,
  TextInput
} from 'react-native';
import {
  SearchBar
} from 'react-native-elements';
import data from '../data'
// import console = require('console');
/* import Navbar from './Navbar' */

const {
  width,
  height
} = Dimensions.get('window')

function createData(item, idArray) {
  return {
    id: idArray,
    _id: item._id,
    key: item.nombre,
    promedio: item.promedio

  };
}

export default class SearchFilm extends React.Component {
  static navigationOptions = {
    title: 'Películas a calificar',
  };
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      search: '',
      isLoaded: false,
      isOpenMenu: false,
      dataSource: ds.cloneWithRows(data),
      rotateY: new Animated.Value(0),
      translateX: new Animated.Value(width),
      menuAnimation: new Animated.Value(0)
/*       ,
      text: '' */
    };
  }

  updateSearch = search => {
    this.setState({
      search
    });
  };

  renderRow(rowData) {
    const img = rowData.image
    console.log("hola");
    return ( 
      
      <TouchableHighlight style={styles.containerCell}>
          <View>
              <Image 
                  style={{width: width, height: 180}}
                  source={{uri: img}}
              />
              <View style={styles.footerContainer}>
                  <View
                      style={styles.imageUser}
                  >
                      <Image 
                          style={styles.imageAvatar}
                          source={{uri: rowData.user}}
                      />
                  </View>
                  <View style={styles.footerTextContainer}>
{/*                   <Text style={styles.text}>{rowData.food}</Text>
                      <Text style={[styles.text, styles.textTitle]}>{rowData.title}</Text>
                      <Text style={[styles.text, styles.textBy]}>By {rowData.by}</Text> */}
                      </View>
              </View>
          </View>
      </TouchableHighlight>
    )
  }

  render() {
    const {search} = this.state;
    
    return ( 
      
      <View style = {styles.container} >
      <SearchBar placeholder = "¿Cuál película te gustaría calificar?"
      onChangeText = {this.updateSearch}
      value = {search}
      lightTheme = {true}
      /> {/*  <Animated.View style = {
        [styles.content, {
          width: width,
          backgroundColor: 'gray',
          flex: 1,
          transform: [{
              perspective: 450
            },
            {
              translateX: this.state.translateX.interpolate({
                inputRange: [0, width],
                outputRange: [width, 0]
              })
            },
            {
              rotateY: this.state.rotateY.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '-10deg']
              })
            }
          ]
        }]
      }
      />  */}
{/*       {
      {this.state.isOpenMenu ? <Navbar icon="times" showMenu={this.closeMenu.bind(this)}/> : <Navbar icon="bars" showMenu={this.showMenu.bind(this)}/>}
     }  */}
{/*      <TextInput style = {
      styles.textInput
    }
    onChangeText = {
      (text) => this.filterSearch(text)
    }
    value = {
      this.state.text
    }
    /> <ListView enableEmptySections = {
      true
    }
    style = {
      styles.listContainer
    }
    renderRow = {
      this.renderRow.bind(this)
    }
    dataSource = {
      this.state.dataSource
    }
    /> */}
{/*       <Animated.View style = {
        [styles.menu, {
          opacity: this.state.menuAnimation,
          position: 'absolute',
          width: 140,
          left: 0,
          top: 100,
          backgroundColor: 'transparent'
        }]
      } >
      <Text style = {
        styles.textMenu
      } > Home </Text><Text style = {
      styles.textMenu
    } > New Recipes </Text><Text style = {
      styles.textMenu
    } > Recipes </Text><Text style = {
      styles.textMenu
    } > Profile </Text><Text style = {
        styles.textMenu
      } > Settings </Text>
      </Animated.View>  */}
      </View>
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
    padding: 10,
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