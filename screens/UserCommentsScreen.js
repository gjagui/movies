import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

const USER_COMMENTS_URL = "http://gustavomovies2.herokuapp.com/comments/user/";

export default class UserComments extends Component {

    static navigationOptions = { title: 'Mis Comentarios' };

    constructor(props) {
        super(props);
        this.state = { comments: {} };
    };

    componentDidMount = () => {
        this.fetchUserComment("gjagui@gmail.com");
    };

    fetchUserComment = (username) => {
        fetch(`${USER_COMMENTS_URL}${username}`)
        .then(result    => result.json())
        .then(comments  => { this.setState({ comments })})
        .catch(error    => console.log(error));
    }

    render() {
        let comments = <Text></Text>;

        if (this.state.comments.length > 0) {

            comments = this.state.comments.map((comment) => {
        
            return (
                <View key= {comment._id}>
                    <Text h1>Título: {comment.title}</Text>
                    <Text h2>Usuario: {comment.username}</Text>
                    <Text h3>Voto: {comment.score}</Text>
                    <Text h4>Comentario: {comment.comment}</Text>
                </View>
                );
            });  
        }

        return (
            <ScrollView>
                { comments }
            </ScrollView>
            )
  };
}