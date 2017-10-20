import React, { Component } from 'react';
import { connect } from 'react-redux';


class Validation extends Component{

   render(){
      return(
         <div className="validation">
            <div className="validationHeader">
               Добавить новый документ
            </div>
            <div className="messageAction">
              Ошибка
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
