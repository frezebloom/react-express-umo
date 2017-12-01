import React, { Component } from "react";
import { connect } from "react-redux";
import edit from "../img/edit.png";

class SearchTable extends Component {

  state = {
    searchDate: []
  }

  componentDidMount() {
    this.searchDocuments()
  }

  //Update ducument
  newStateUpdateForm = (event) => {
    this.props.newStateAddForm(false);
    this.props.newStateUpdateForm(true);

    var arrayFilter = (data) => {
      var e = Number(event.target.id);
      return data.id === e;
    };

    var a = this.props.data.allDocuments.filter(arrayFilter);
    var updateDoc = 0;
    a.forEach(item => {
      updateDoc = item;
    });
    this.props.UpdateForm(updateDoc);
  }

  //Поиск документов
  searchDocuments = () => {
    let searchDocuments = this.props.data.searchDocuments[this.props.data.searchDocuments.length - 1]
    let allDocuments = this.props.data.allDocuments

    let searchData = allDocuments.filter(data =>
      data.programmNumber.toLowerCase().includes(searchDocuments.programmNumber.toLowerCase())
    )
  }

  render() {
    var keys = new Date().getTime();
    return (
      <table>
        <tbody>
          <tr>
            <td className="cap">Иsssssзменить</td>
            <td className="cap">№ программы</td>
            <td className="cap">Ф.И.О.</td>
            <td className="cap">Предприятие</td>
            <td className="cap">Категория персонала</td>
            <td className="cap">Подразделение</td>
            <td className="cap">Должность</td>
            <td className="cap">Распределение обучения</td>
            <td className="cap">Срок подготовки обучения</td>
            <td className="cap">Обучение в УТЦ</td>
            <td className="cap">Обучение в подразделении</td>
            <td className="cap">Дата регистрации программы</td>
            <td className="cap">Дата сдачи программы</td>
            <td className="cap">Ф.И.О.</td>
            <td className="cap">Ссылка</td>
          </tr>
          {this.props.data.allDocuments.map((doc, index) => (
            <tr key={index + 1 * keys}>
              <td>
                <img
                  src={edit}
                  id={doc.id}
                  className="iconEdit"
                  alt="Изменить"
                  onClick={this.newStateUpdateForm}
                />
              </td>
              <td>{doc.programmNumber}</td>
              <td>{doc.fullName}</td>
              <td>{doc.company}</td>
              <td>{doc.personnelCategory}</td>
              <td>{doc.subdivision}</td>
              <td>{doc.position}</td>
              <td>{doc.distributionOfTraining}</td>
              <td>{doc.termOfTraining}</td>
              <td>{doc.trainingInTheUTC}</td>
              <td>{doc.trainingInTheUnit}</td>
              <td>{doc.registrationDateOfTheProgram}</td>
              <td>{doc.dateOfDelivery}</td>
              <td>{doc.fullNameProgram}</td>
              <td>{doc.link}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({
    UpdateForm: state => {
      dispatch({ type: "UPDATE_DOCUMENT", payload: state });
    },
    newStateUpdateForm: state => {
      dispatch({ type: "SHOW_UPDATEFORM", payload: state });
    },
    newStateAddForm: state => {
      dispatch({ type: "SHOW_ADDFORM", payload: state });
    }
  })
)(SearchTable);
