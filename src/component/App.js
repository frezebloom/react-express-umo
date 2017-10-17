import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './Header.js';
import DocForm from './DocForm.js';
import Table from './Table.js';
import UpdateForm from './UpdateForm.js'

class App extends Component {

   componentDidMount(){

    //  axios.post('/', {})
    //   .then(function (response) {
    //     this.props.allDocuments(response.data);
    //   }.bind(this))
     //
    //   .catch(function (error) {
    //     console.log(error);
    //   });

      var test = [
       {"id":22,"programmNumber":"18365","fullName":"Ярема Михаил Николаевич","company":"ЛАЭС-1","personnelCategory":"Оперативный","subdivision":"2","position":"3","theoreticalTraining":"4","practicalTraining":"5","internship":"6","termOfTraining":"7","trainingInTheUTC":"8","trainingInTheUnit":"9","registrationDateOfTheProgram":"10","dateOfDelivery":"1","fullNameProgram":"5","link":"4","status":1},
       {"id":23,"programmNumber":"18366","fullName":"Барисполь Валентин Иванович","company":"ЛАЭС-2","personnelCategory":"Рабочие","subdivision":"3","position":"3","theoreticalTraining":"4","practicalTraining":"5","internship":"2","termOfTraining":"5","trainingInTheUTC":"83","trainingInTheUnit":"91","registrationDateOfTheProgram":"12","dateOfDelivery":"3","fullNameProgram":"2","link":"2","status":0}
     ];
     this.props.allDocuments(test);
   }


   render(){

   if(this.props.data.showAddForm){
      var docForm = <DocForm />
   }
   if(this.props.data.showUpdateForm){
      var docForm = <UpdateForm />
   }

   return(
         <div>
            <Header />
            <Table />
            {docForm}
            {UpdateForm}
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
