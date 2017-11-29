import React, { Component } from "react";
import { connect } from "react-redux";
import { DatePickerInput } from "rc-datepicker";

import "moment/locale/ru.js";
import "rc-datepicker/lib/style.css";

class SearchForm extends Component {
  render() {
    return (
      <div className="SearchForm">
        <div className="headerWindow">Изменить текущий документ</div>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <label>№ программы</label>
            <input
              className="form-control"
              type="text"
              name="programmNumber"
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Ф.И.О.</label>
            <input
              className="form-control"
              type="text"
              name="fullName"
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Предприятие</label>
            <select id="company" className="form-control" name="company">
              <option value="ЛАЭС-1">ЛАЭС-1</option>
              <option value="ЛАЭС-2">ЛАЭС-2</option>
            </select>
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Категория персонала</label>
            <select
              id="personnelCategory"
              className="form-control"
              name="personnelCategory"
            >
              <option value="Оперативный">Оперативный</option>
              <option value="Ремонтный">Ремонтный</option>
              <option value="Административный">Административный</option>
              <option value="Руководители">Руководители</option>
              <option value="Специалисты">Специалисты</option>
              <option value="Рабочие">Рабочие</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <label>Подразделение</label>
            <input
              className="form-control"
              type="text"
              id="subdivision"
              name="subdivision"
            />



          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Должность</label>
            <input
              className="form-control"
              type="text"
              id="position"
              name="position"
            />




          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Теоретическая подготовка</label>
            <input
              className="form-control"
              type="text"
              name="theoreticalTraining"
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Практическая подготовка</label>
            <input
              className="form-control"
              type="text"
              name="practicalTraining"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <label>Стажировка</label>
            <input
              className="form-control"
              type="text"
              name="internship"
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Распределение обучения</label>
            <input
              className="form-control"
              type="text"
              name="link"
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Ф.И.О. (Сдающий программу)</label>
            <input
              className="form-control"
              type="text"
              name="fullNameProgram"
            />
          </div>
        </div>


        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <label>Срок подготовки обучения:</label>
          </div>
          <div className="col-xs-6 col-sm-3">
            <DatePickerInput
              name="StartTermOfTraining"
              className="my-custom-datepicker-component"
              placeholder="С указанной даты"
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <DatePickerInput
              name="FinishTermOfTraining"
              className="my-custom-datepicker-component"
              placeholder="До указанной даты"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <label>Обучение в УТЦ:</label>
          </div>
          <div className="col-xs-6 col-sm-3">
            <DatePickerInput
              name="StartTrainingInTheUTC"
              className="my-custom-datepicker-component"
              placeholder="С указанной даты"
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <DatePickerInput
              name="FinishTrainingInTheUTC"
              className="my-custom-datepicker-component"
              placeholder="До указанной даты"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <label>Обучение в подразделении:</label>
          </div>
          <div className="col-xs-6 col-sm-3">
            <DatePickerInput
              name="StartTrainingInTheUnit"
              className="my-custom-datepicker-component"
              placeholder="С указанной даты"
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <DatePickerInput
              name="FinishTrainingInTheUnit"
              className="my-custom-datepicker-component"
              placeholder="До указанной даты"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <label>Дата регистрации программы:</label>
          </div>
          <div className="col-xs-6 col-sm-3">
            <DatePickerInput
              name="StartRegistrationDateOfTheProgram"
              className="my-custom-datepicker-component"
              placeholder="С указанной даты"
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <DatePickerInput
              name="FinishRegistrationDateOfTheProgram"
              className="my-custom-datepicker-component"
              placeholder="До указанной даты"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <label>Дата сдачи программы:</label>
          </div>
          <div className="col-xs-6 col-sm-3">
            <DatePickerInput
              name="StartDateOfDelivery"
              className="my-custom-datepicker-component"
              placeholder="С указанной даты"
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <DatePickerInput
              name="FinishDateOfDelivery"
              className="my-custom-datepicker-component"
              placeholder="До указанной даты"
            />
          </div>
        </div>

        <div className="row">
          <div className="btn-group btn-group-justified">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger btn-lg"
              >
                Закрыть
              </button>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-default btn-lg"
              >
                Удалить
              </button>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-success btn-lg"
              >
                Показать
              </button>
            </div>
          </div>
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

  })
)(SearchForm);
