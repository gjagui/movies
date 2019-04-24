import {Component} from 'react';

//const url ="http://192.168.43.209:8080/apiAppdist/";
const url = "https://gustavomovies2.herokuapp.com/";
const urlGetEquipos="getEquipos";
const urlSignIn="users/login";
const urlGuardarSignUp="users/create"


class ApiController extends Component
{
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
                console.log("jaker");
              }

              //console.log("Recibi datos");
      }).catch((err)=>{
          console.log(err);
      });
  };



    GuardarSignUp(data)
    {
        console.log(data);
        const endpoint = `${url}${urlGuardarSignUp}`;
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
}
export default new ApiController();
