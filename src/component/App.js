import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './Header.js';
import DocForm from './DocForm.js';
import Table from './Table.js';

class App extends Component {

   componentDidMount(){

     axios.post('/', {})
      .then(function (response) {
        this.props.allDocuments(response.data);
      }.bind(this))

      .catch(function (error) {
        console.log(error);
      });

    }

   render(){
   if(this.props.data.newAddForm){
      var docForm = <DocForm />
   }

   return(
         <div>
            <Header />
            <Table />
            {docForm}
         </div>
      )
   }
}

export default connect(
   state => ({
      data: state
   }),
   dispatch => ({
     allDocuments: (state) => {
        dispatch({ type: 'ALL_DOCUMENTS', payload: state });
     },
   })
)(App);
