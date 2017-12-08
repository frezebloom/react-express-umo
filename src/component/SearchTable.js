import React, { Component } from "react";
import { connect } from "react-redux";
import edit from "../img/edit.png";
import links from "../img/link.png";
import eye from "../img/eye.png";

import Info from './Info.js'

class SearchTable extends Component {

  state = {
    searchDate: []
  }

  //Update ducument
  newStateUpdateForm = (event) => {
    this.props.newStateAddForm(false);
    this.props.newStateUpdateForm(true);
    this.props.showQuickSearch(true)
    this.props.showSearchTable(false)
    this.props.showTable(true)

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

  //Отправка distributionOfTraining store
  info = event => {
    this.props.showInfo(true)
    let data = this.props.data.searchDocuments[this.props.data.searchDocuments.length - 1]
    let infoDoc = data[event.target.id]
    let distributionOfTraining = {
      theoreticalTraining: `Теоретическая подготовка: ${infoDoc.theoreticalTraining}`,
      practicalTraining:   `Практическая подготовка: ${infoDoc.practicalTraining}`,
      internship:          `Стажировка: ${infoDoc.internship}`,
    }

    this.props.distributionOfTraining(distributionOfTraining)

    //Coordinates
    let position = {
      positionX: event.clientX,
      positionY: event.clientY
    }
    this.props.coordinates(position)

  }

  //Закрытие инфо
  closeInfo = () => {
    this.props.showInfo(false)
  }

  //Форматирование даты
  formatDate = (date) => {
    let day = date.substring(8, 10);
    let month = date.substring(5, 7);
    let year = date.substring(4, 0)
    let formatDate = `${day}.${month}.${year}`
    return formatDate;
  }

  render() {
    var searchData = this.props.data.searchDocuments[this.props.data.searchDocuments.length - 1]
    console.log(searchData)
    var keys = new Date().getTime();
    return (
      <div>
        {this.props.data.showInfo ? <Info /> : false}
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
            {searchData.map((doc, index) => (
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
                <td className="distributionOfTraining" id={index} onMouseOut={this.closeInfo} onMouseEnter={this.info}>{Number(doc.theoreticalTraining) + Number(doc.practicalTraining) + Number(doc.internship)}</td>
                <td>{this.formatDate(doc.termOfTraining)}</td>
                <td>{this.formatDate(doc.trainingInTheUTC)}</td>
                <td>{this.formatDate(doc.trainingInTheUnit)}</td>
                <td>{this.formatDate(doc.registrationDateOfTheProgram)}</td>
                <td>{this.formatDate(doc.dateOfDelivery)}</td>
                <td>{doc.fullNameProgram}</td>
                <td>
                  <a href={doc.link} target="_blank"><img
                    src={links}
                    className="iconEdit"
                    alt="Ссылка"
                    />
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
    data: state
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
    showTable: state => {
      dispatch({ type: "SHOW_TABLE", payload: state });
    },
    showSearchTable: state => {
      dispatch({ type: "SHOW_SEARCHTABLE", payload: state });
    },
    distributionOfTraining: state => {
      dispatch({ type: "INFO_DT", payload: state });
    },
    showInfo: state => {
      dispatch({ type: "SHOW_INFO", payload: state });
    },
    coordinates: state => {
      dispatch({ type: "COORDINATES_MOUSE", payload: state });
    },
  })
)(SearchTable);
