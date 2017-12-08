import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class UpdateValidation extends Component {
  state = {
    message: "Все данные успешно обновлены",
    danger: false
  };

  componentDidMount() {
    let count = 0;

    let value = this.props.data.updateDocument[
      this.props.data.updateDocument.length - 1
    ];

    let collectionData = [
      value.programmNumber,
      value.fullName,
      value.company,
      value.personnelCategory,
      value.subdivision,
      value.position,
      value.theoreticalTraining,
      value.practicalTraining,
      value.internship,
      value.termOfTraining,
      value.trainingInTheUTC,
      value.trainingInTheUnit,
      value.registrationDateOfTheProgram,
      value.dateOfDelivery,
      value.fullNameProgram,
      value.link
    ];

    let collectionDate = [
      value.termOfTraining,
      value.trainingInTheUTC,
      value.trainingInTheUnit,
      value.registrationDateOfTheProgram,
      value.dateOfDelivery
    ];

    //Проверка формата даты

    collectionDate.forEach((item, index) => {
      var conversionDateFormat = new Date(item);
      if (conversionDateFormat instanceof Date) {
        return true;
      } else {
        this.setState({
          message: "Введите корректную дату (ДД.ММ.ГГГГ)",
          danger: true
        });
      }
    });

    //Проверка количества приходящих данных (должно быть не меньше 16);
    collectionData.forEach(item => {
      if (item === undefined || item === "" || item === "Invalid date") {
        return false;
      }
      count++;
    });
    if (count !== 16) {
      this.setState({
        message: "Заполните все необходимые поля",
        danger: true
      });
    }
  }

  clickOkay = event => {
    if (this.state.danger === true) {
      this.props.updateValidation(false);
      this.props.updateDocument(true);
    } else {
      let value = this.props.data.updateDocument[
        this.props.data.updateDocument.length - 1
      ];
      this.props.updateValidation(false);
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
          status: true
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div className="animated fadeInLeft validation">
        <div className="validationHeader">Изменение</div>
        <div className="messageAction">{this.state.message}</div>
        <div className="buttonSuccess">
          <button
            type="button"
            className={
              this.state.danger
                ? "btn btn-danger btn-lg btn-block"
                : "btn btn-success btn-lg btn-block"
            }
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
  state => ({
    data: state
  }),
  dispatch => ({
    updateDocument: state => {
      dispatch({ type: "SHOW_UPDATEFORM", payload: state });
    },
    updateValidation: state => {
      dispatch({ type: "SHOW_UPDATEVALIDATION", payload: state });
    }
  })
)(UpdateValidation);
