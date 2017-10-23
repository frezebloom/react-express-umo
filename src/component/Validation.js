import React, { Component } from 'react';
import { connect } from 'react-redux';


class Validation extends Component{

   render(){

     let count = 1;
     let validation = this.props.data.validation;
     let massage = 'Все данные успешно сохранены'

     for(let key in validation){
       var counts =+ count++;
     }
     if(counts !== 16){
       massage = 'Заполните все необходимые поля'
     }

      return(
         <div className="validation">
            <div className="validationHeader">
               Добавить новый документ
            </div>
            <div className="messageAction">
              {massage}
            </div>
            <div className="buttonSuccess">
              <button type="button" className="btn btn-success btn-lg btn-block">Окей!</button>
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
