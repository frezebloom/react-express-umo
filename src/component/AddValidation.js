import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class AddValidation extends Component{
   constructor(props){
     super(props);

     this.state = {
       massage: 'Все данные успешно сохранены',
       danger: false
     }

     this.clickOkay = this.clickOkay.bind(this);
   }

   componentDidMount(){
     let count = 0;

     let value = this.props.data.validation;

     let collectionData = [value.programmNumber, value.fullName, value.company,
                           value.personnelCategory, value.subdivision, value.position,
                           value.theoreticalTraining, value.practicalTraining,
                           value.internship, value.termOfTraining, value.trainingInTheUTC,
                           value.trainingInTheUnit, value.registrationDateOfTheProgram,
                           value.dateOfDelivery, value.fullNameProgram, value.link];

     let collectionDate = [value.termOfTraining, value.trainingInTheUTC,
                           value.trainingInTheUnit, value.registrationDateOfTheProgram,
                           value.dateOfDelivery];

     //Проверка формата даты

     collectionDate.forEach((item, index) => {
       if(item instanceof Date){
         return true;
       }
       else{
         this.setState({
           massage: 'Введите корректную дату (ДД.ММ.ГГГГ)',
           danger: true
         })
       }
     })

     //Проверка количества приходящих данных (должно быть не меньше 16);
      collectionData.forEach((item) => {
        if(item === undefined){
          return false;
        }
        count++;
      })
      if(count !== 16){
        this.setState({
          massage: 'Заполните все необходимые поля',
          danger: true
        })
      }
   }

   clickOkay(event){
     if(this.state.danger === true){
       this.props.addValidation(false);
       this.props.newStateAddForm(true);
     }
     else{
       let value = this.props.data.validation;
       this.props.addValidation(false);
       axios.post('/newdoc', {
         programmNumber:               value.programmNumber,
         fullName:                     value.fullName,
         company:                      value.company,
         personnelCategory:            value.personnelCategory,
         subdivision:                  value.subdivision,
         position:                     value.position,
         theoreticalTraining:          value.theoreticalTraining,
         practicalTraining:            value.practicalTraining,
         internship:                   value.internship,
         termOfTraining:               value.termOfTraining,
         trainingInTheUTC:             value.trainingInTheUTC,
         trainingInTheUnit:            value.trainingInTheUnit,
         registrationDateOfTheProgram: value.registrationDateOfTheProgram,
         dateOfDelivery:               value.dateOfDelivery,
         fullNameProgram:              value.fullNameProgram,
         link:                         value.link,
         status:                       true
       })
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
     }
   }

   render(){
      return(
         <div className="validation">
            <div className="validationHeader">
               Добавить новый документ
            </div>
            <div className="messageAction">
              {this.state.massage}
            </div>
            <div className="buttonSuccess">
              <button type="button" className={this.state.danger ? "btn btn-danger btn-lg btn-block" : "btn btn-success btn-lg btn-block" } onClick={this.clickOkay}>Окей!</button>
            </div>
         </div>
      );
   }
}

export default connect(
   state => ({
      data: state
   }),
   dispatch => ({
     newStateAddForm: (state) => {
        dispatch({ type: 'SHOW_ADDFORM', payload: state });
     },
     addValidation: (state) => {
       dispatch({ type: 'SHOW_VALIDATION', payload: state });
     },
   })
)(AddValidation);
