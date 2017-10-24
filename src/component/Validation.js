import React, { Component } from 'react';
import { connect } from 'react-redux';


class Validation extends Component{

   render(){

     let count = 1;
     let validation = this.props.data.validation;
     let massage = 'Все данные успешно сохранены';
     let collectionDate = [validation.termOfTraining, validation.trainingInTheUTC,
                           validation.trainingInTheUnit, validation.registrationDateOfTheProgram,
                           validation.dateOfDelivery];
     let danger = false;

    //Проверка количества приходящих данных (должно быть не меньше 16);
     for(let key in validation){
       var counts =+ count++;
     }

     if(counts !== 16){
       massage = 'Заполните все необходимые поля'
       danger = true;
     }

     //Функция проверки формата даты;
     var regExp = (data) => {
       var errorDate = /(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.]\d\d/.test(data);
       return errorDate;
     }

     collectionDate.forEach((item, index) => {
       let test = regExp(item);
       if(!test){
        massage = 'Дата введена не коректно (ДД.ММ.ГГГГ)';
        danger = true;
       }
     })



      return(
         <div className="validation">
            <div className="validationHeader">
               Добавить новый документ
            </div>
            <div className="messageAction">
              {massage}
            </div>
            <div className="buttonSuccess">
              <button type="button" className={danger ? "btn btn-danger btn-lg btn-block" : "btn btn-success btn-lg btn-block" }>Окей!</button>
            </div>
         </div>
      );
   }
}

export default connect(
   state => ({
      data: state
   }),
   dispatch => ({ })
)(Validation);
