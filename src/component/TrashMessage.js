import React, { Component } from "react";
import { connect } from "react-redux";

class TrashMessage extends Component {
  clickOkay = () => {
    this.props.showTrashMessage(false);
  };

  render() {
    return (
      <div className="animated fadeInLeft validation">
        <div className="validationHeader">Сообщение</div>
        <div className="messageAction">Документ успешно удален</div>
        <div className="buttonSuccess">
          <button
            type="button"
            className="btn btn-success btn-lg btn-block"
            onClick={this.clickOkay}
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
)(TrashMessage);
