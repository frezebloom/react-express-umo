import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class TrashModalWindow extends Component{

   constructor(props){
     super(props);

     this.clickYes = this.clickYes.bind(this);
     this.clickNo = this.clickNo.bind(this);

   }

   clickNo(){
     this.props.newStateUpdateForm(true);
     this.props.newStateTrashModalWindow(false);
   }

   clickYes(){
     this.props.newStateUpdateForm(false);
     this.props.newStateTrashModalWindow(false);
   }

   render(){
      return(
         <div className="validation">
            <div className="validationHeader">
               Сообщение:
            </div>
            <div className="messageAction">
              Вы действительно хотите переместить этот документ в корзину?
            </div>
            <div className="buttonSuccess">
              <button type="button" className="btn btn-success btn-lg btn-block" onClick={this.clickYes}>Да</button>
              <button type="button" className="btn btn-danger btn-lg btn-block" onClick={this.clickNo}>Нет</button>
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
     newStateUpdateForm: (state) => {
        dispatch({ type: 'SHOW_UPDATEFORM', payload: state });
     },
     newStateTrashModalWindow: (state) => {
       dispatch({ type: 'SHOW_TRASHMODALWINDOW', payload: state });
     }
   })
)(TrashModalWindow);
