import React, { Component } from "react";
import { connect } from "react-redux";
import edit from "../img/edit.png";
import links from "../img/link.png";
import eye from "../img/eye.png";

import Info from './Info.js'

class Table extends Component {
  constructor(props) {
    super(props);

    this.newStateUpdateForm = this.newStateUpdateForm.bind(this);
  }


  newStateUpdateForm(event) {
    this.props.showSearhForm(false);
    this.props.newStateAddForm(false);
    this.props.newStateUpdateForm(true);
    this.props.showQuickSearch(true);

    var arrayFilter = function(data) {
      var e = Number(event.target.id);
      return data.id === e;
    };

    var a = this.props.data.filter(arrayFilter);
    var updateDoc = 0;
    a.forEach(item => {
      updateDoc = item;
    });
    this.props.UpdateForm(updateDoc);
  }

  info = event => {
    let infoDoc = this.props.data[event.target.id]
  }

  render() {
    var keys = new Date().getTime();
    return (
      <div>
        <Info />
        <table>
          <tbody>
            <tr>
              <td className="cap">Изменить</td>
              <td className="cap">№ программы</td>
              <td className="cap">Ф.И.О.</td>
              <td className="cap">Предприятие</td>
              <td className="cap">Категория персонала</td>
              <td className="cap">Подразделение</td>
              <td className="cap">Должность</td>
              <td className="cap">
                Распределение обучения<div className="eye">
                  <img
                    src={eye}
                    height="16px"
                    width="16px"
                    alt="Наведите курсор"
                    title="Наведите курсор на ячейку для просмотра данных (Теоретическая подготовка, Практическая подготовка, Стажировка)"
                  />
                </div>
              </td>
              <td className="cap">Срок подготовки обучения</td>
              <td className="cap">Обучение в УТЦ</td>
              <td className="cap">Обучение в подразделении</td>
              <td className="cap">Дата регистрации программы</td>
              <td className="cap">Дата сдачи программы</td>
              <td className="cap">Ф.И.О.</td>
              <td className="cap">Ссылка</td>
            </tr>
            {this.props.data.map((doc, index) => (
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
                <td className="distributionOfTraining" id={index} onMouseOut={this.info}>{Number(doc.theoreticalTraining) + Number(doc.practicalTraining) + Number(doc.internship)}</td>
                <td>{doc.termOfTraining}</td>
                <td>{doc.trainingInTheUTC}</td>
                <td>{doc.trainingInTheUnit}</td>
                <td>{doc.registrationDateOfTheProgram}</td>
                <td>{doc.dateOfDelivery}</td>
                <td>{doc.fullNameProgram}</td>
                <td>
                  <a href={doc.link} target="_blank">
                    <img src={links} className="iconEdit" alt="Ссылка" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state.allDocuments.filter(
      data =>
        data.programmNumber
          .toLowerCase()
          .includes(state.quickSearch.toLowerCase()) ||
        data.fullName.toLowerCase().includes(state.quickSearch.toLowerCase()) ||
        data.company.toLowerCase().includes(state.quickSearch.toLowerCase()) ||
        data.personnelCategory
          .toLowerCase()
          .includes(state.quickSearch.toLowerCase()) ||
        data.subdivision
          .toLowerCase()
          .includes(state.quickSearch.toLowerCase()) ||
        data.position.toLowerCase().includes(state.quickSearch.toLowerCase()) ||
        data.termOfTraining
          .toLowerCase()
          .includes(state.quickSearch.toLowerCase()) ||
        data.trainingInTheUTC
          .toLowerCase()
          .includes(state.quickSearch.toLowerCase()) ||
        data.trainingInTheUnit
          .toLowerCase()
          .includes(state.quickSearch.toLowerCase()) ||
        data.registrationDateOfTheProgram
          .toLowerCase()
          .includes(state.quickSearch.toLowerCase()) ||
        data.dateOfDelivery
          .toLowerCase()
          .includes(state.quickSearch.toLowerCase()) ||
        data.fullNameProgram
          .toLowerCase()
          .includes(state.quickSearch.toLowerCase())
    )
  }),
  dispatch => ({
    UpdateForm: state => {
      dispatch({ type: "UPDATE_DOCUMENT", payload: state });
    },
    newStateUpdateForm: state => {
      dispatch({ type: "SHOW_UPDATEFORM", payload: state });
    },
    showQuickSearch: state => {
      dispatch({ type: "SHOW_QUICKSEARCH", payload: state });
    },
    newStateAddForm: state => {
      dispatch({ type: "SHOW_ADDFORM", payload: state });
    },
    showSearhForm: state => {
      dispatch({ type: "SHOW_SEARHFORM", payload: state });
    }
  })
)(Table);
