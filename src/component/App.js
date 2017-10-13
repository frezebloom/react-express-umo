import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './Header.js';
import DocForm from './DocForm.js';
import Table from './Table.js';

class App extends Component {

   componentDidMount(){
    //  axios.post('/', {})
    //   .then(function (response) {
    //     // response.data.map((item, key) => {
    //     //   this.props.allDocuments(item);
    //     // });
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // }
    var test = [
      {"id":22,"programmNumber":"18365","fullName":"Ярема Михаил Николаевич","company":"ЛАЭС-1","personnelCategory":"1","subdivision":"2","position":"3","theoreticalTraining":"4","practicalTraining":"5","internship":"6","termOfTraining":"7","trainingInTheUTC":"8","trainingInTheUnit":"9","registrationDateOfTheProgram":"10","dateOfDelivery":"1","fullNameProgram":"2","link":"2","status":1},
      {"id":23,"programmNumber":"18365","fullName":"Ярема Михаил Николаевич","company":"ЛАЭС-1","personnelCategory":"1","subdivision":"2","position":"3","theoreticalTraining":"4","practicalTraining":"5","internship":"6","termOfTraining":"7","trainingInTheUTC":"8","trainingInTheUnit":"9","registrationDateOfTheProgram":"10","dateOfDelivery":"1","fullNameProgram":"2","link":"2","status":1}
    ];
    this.props.allDocuments(test);
  }

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
   dispatch => ({
     allDocuments: (state) => {
        dispatch({ type: 'ALL_DOCUMENTS', payload: state });
     },
   })
)(App);
