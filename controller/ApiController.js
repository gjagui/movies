import {Component} from 'react';

//const url ="http://192.168.43.209:8080/apiAppdist/";
const url = "https://gustavomovies2.herokuapp.com/";
const urlChangePwd="users/update";
const urlSignIn="users/login";
const urlGuardarSignUp="users/create"
const urlComentariosUsuario="comments/user/";
const urlComentarioPelicula = "comments/imdbID/";
const urlCrearComentario = "comments/create/";
const urlMovieSearch = "http://www.omdbapi.com/?i=tt3896198&apikey=d0b64143&s=";


class ApiController extends Component
{
    getUserComments = async (username) => {
        let comments_values = await fetch(`${url}${urlComentariosUsuario}${username}`);
        let comments = await comments_values.json();
        return comments;
    };

    searchMovies = async (movie) => {
        let movies_values = await fetch(`${urlMovieSearch}${movie}`);
        let movies = await movies_values.json();
        return (movies.Response == "True") ? movies.Search : [];
    }

    getMovieComments = async (imdbID) => {
        let comments_values = await fetch(`${url}${urlComentarioPelicula}${imdbID}`);
        let comments = await comments_values.json();
        return comments;
    }

    createComment = async (title, username, comment, score, imdbID) => {
        let data = JSON.stringify({title, username, comment, score, imdbID});
        console.log(data);
        let options = {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: data
        };

        let comment_status = await fetch(`${url}${urlCrearComentario}`, options);
        console.log(comment_status);

        return comment_status;
    }
    
    SignIn(data,rdoBusqueda)
    {

      const endpoint = `${url}${urlSignIn}`;
      console.log(data);
     fetch(endpoint,{
          method: 'POST', // or 'PUT'
          mode: "cors",
          headers:{ 'Content-Type': 'application/json'},
          body: JSON.stringify(data) // data can be `string` or {object}!
      }).then ((response) => {

          return response.json();
      }).then (responseData => {
              console.log(responseData);
              console.log(responseData.User);
              rdoBusqueda(responseData.User);
              if(responseData.User){
                console.log("conectado");
              }
              else {
                alert("Contraseña incorrecta");
              }

              //console.log("Recibi datos");
      }).catch((err)=>{
          console.log(err);
      });
  };



    GuardarSignUp(data)
    {
        console.log(data);
        const endpoint = `${url}${urlChangePwd}`;
        console.log(endpoint);
        //console.log("Buscando")
        console.log(data);
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        }).then ((response) => {

            return response.json();
        }).then (responseData => {
                console.log(responseData);

                //console.log("Recibi datos");
        }).catch((err)=>{
            console.log(err);
        });
    };

    ChangePwd(data,rdoBusqueda)
    {
        console.log(data);
        const endpoint = `${url}${urlChangePwd}`;
        console.log(endpoint);
        //console.log("Buscando")
        console.log(data);
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        }).then ((response) => {

            return response.json();
        }).then (responseData => {
                rdoBusqueda(responseData);
                console.log(responseData);

                //console.log("Recibi datos");
        }).catch((err)=>{
            console.log(err);
        });
    };
}
export default new ApiController();
