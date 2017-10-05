import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header.js';
import DocForm from './DocForm.js';
import Table from './Table.js';

class App extends Component {

   render(){
   console.log(this.props.data);
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
   dispatch => ({})
)(App);
