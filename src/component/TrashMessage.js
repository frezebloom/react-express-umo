<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";

class TrashMessage extends Component {
  clickOkay() {
    this.props.showTrashMessage(false);
  }

  render() {
    return (
      <div className="validation">
        <div className="validationHeader">Сообщение</div>
        <div className="messageAction">
          Документ успешно перенесен в корзину
        </div>
        <div className="buttonSuccess">
          <button
            type="button"
            className="btn btn-success btn-lg btn-block"
            onClick={this.clickOkay.bind(this)}
          >
            Окей!
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    showTrashMessage: state => {
      dispatch({ type: "SHOW_TRASHMESSAGE", payload: state });
    }
  })
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';

class TrashMessage extends Component{

   clickOkay(){
     this.props.showTrashMessage(false);
   }

   render(){
      return(
         <div className="validation">
            <div className="validationHeader">
               Сообщение
            </div>
            <div className="messageAction">
              Документ успешно перенесен в корзину.
            </div>
            <div className="buttonSuccess">
              <button type="button" className="btn btn-success btn-lg btn-block" onClick={this.clickOkay.bind(this)}>Окей!</button>
            </div>
         </div>
      );
   }
}

export default connect(
   state => ({
   }),
   dispatch => ({
     showTrashMessage: (state) => {
       dispatch({ type: 'SHOW_TRASHMESSAGE', payload: state });
     },
   })
>>>>>>> bf8b45855b2f573fb807351f2ccb5221d1cbaf51
)(TrashMessage);
