   // resources/assets/js/components/App.js

   import React, { Component } from 'react'
   import ReactDOM from 'react-dom'
   import { BrowserRouter, Route, Switch } from 'react-router-dom'
   import Header from './Header'

   class App extends Component {

    constructor() {
        axios.get('http://127.0.0.1:8000/api/users ')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    console.log("Done")
  });
    }
     render () {
       return (
         <BrowserRouter>
           <div>
             <Header />
           </div>
         </BrowserRouter>
       )
     }
   }

   ReactDOM.render(<App />, document.getElementById('app'))
