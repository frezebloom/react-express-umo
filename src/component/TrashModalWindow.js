import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class TrashModalWindow extends Component {
  constructor(props) {
    super(props);

    this.clickYes = this.clickYes.bind(this);
    this.clickNo = this.clickNo.bind(this);
  }

  clickNo() {
    this.props.newStateUpdateForm(true);
    this.props.newStateTrashModalWindow(false);
  }

  clickYes() {
    var value = this.props.data.updateDocument[
      this.props.data.updateDocument.length - 1
    ];

    this.props.newStateUpdateForm(false);

    axios
      .post("/update", {
        id: value.id,
        programmNumber: value.programmNumber,
        fullName: value.fullName,
        company: value.company,
        personnelCategory: value.personnelCategory,
        subdivision: value.subdivision,
        position: value.position,
        theoreticalTraining: value.theoreticalTraining,
        practicalTraining: value.practicalTraining,
        internship: value.internship,
        termOfTraining: value.termOfTraining,
        trainingInTheUTC: value.trainingInTheUTC,
        trainingInTheUnit: value.trainingInTheUnit,
        registrationDateOfTheProgram: value.registrationDateOfTheProgram,
        dateOfDelivery: value.dateOfDelivery,
        fullNameProgram: value.fullNameProgram,
        link: value.link,
        status: false
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    this.props.newStateTrashModalWindow(false);
    this.props.showTrashMessage(true);
  }

  render() {
    return (
      <div className="validation">
        <div className="validationHeader">Удаление</div>
        <div className="messageAction">
          Вы действительно хотите удалить документ?
        </div>
        <div className="buttonSuccess">
          <button
            type="button"
            className="btn btn-success btn-lg btn-block"
            onClick={this.clickYes}
          >
            Да
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg btn-block"
            onClick={this.clickNo}
          >
            Нет
          </button>
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
    newStateUpdateForm: state => {
      dispatch({ type: "SHOW_UPDATEFORM", payload: state });
    },
    newStateTrashModalWindow: state => {
      dispatch({ type: "SHOW_TRASHMODALWINDOW", payload: state });
    },
    showTrashMessage: state => {
      dispatch({ type: "SHOW_TRASHMESSAGE", payload: state });
    }
  })
)(TrashModalWindow);
