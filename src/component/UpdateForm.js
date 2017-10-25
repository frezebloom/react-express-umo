import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatePickerInput } from 'rc-datepicker';

import 'moment/locale/ru.js'
import 'rc-datepicker/lib/style.css';

class DocForm extends Component{
   constructor(props){
      super(props);

      this.newStateUpdateForm = this.newStateUpdateForm.bind(this);

      this.termOfTraining = this.termOfTraining.bind(this);
      this.trainingInTheUTC = this.trainingInTheUTC.bind(this);
      this.trainingInTheUnit = this.trainingInTheUnit.bind(this);
      this.registrationDateOfTheProgram = this.registrationDateOfTheProgram.bind(this);
      this.dateOfDelivery = this.dateOfDelivery.bind(this);

   }

   componentDidMount(){
      let data = this.props.data.updateDocument[0];
     //Выбор selected COMPANY по умолчанию
     let companyData = document.getElementById("company");
     for(let i = 0; companyData.length > i; i++){
       if(companyData[i].value === data.company){
         let select = companyData[i].value;
         let option = '<option selected value="'+select+'">'+select+'</option>';
         document.getElementById("company").innerHTML+=option;
         break;
       }
     }

     //Выбор selected personnelCategory по умолчанию
     let personnelCategoryData = document.getElementById("personnelCategory");
     for(let i = 0; personnelCategoryData.length > i; i++){
       if(personnelCategoryData[i].value === data.personnelCategory){
         let select = personnelCategoryData[i].value;
         let option = '<option selected value="'+select+'">'+select+'</option>';
         document.getElementById("personnelCategory").innerHTML+=option;
         break;
       }
     }
   }

   //Открывание и закрывание формы
    newStateUpdateForm(){
      this.props.newStateUpdateForm(false);
    }

  //Дата срока подготовки обучения
    termOfTraining(date){
      this.setState({
        termOfTraining: date
      })
     }

   //Дата обучения в УТЦ
     trainingInTheUTC(date){
       this.setState({
         trainingInTheUTC: date
       })
      }

   //Дата обучения в подразделении
     trainingInTheUnit(date){
       this.setState({
         trainingInTheUnit: date
       })
      }

   //Дата регистрации программы
     registrationDateOfTheProgram(date){
       this.setState({
         registrationDateOfTheProgram: date
       })
     }
     //Дата сдачи программы
      dateOfDelivery(date){
        this.setState({
          dateOfDelivery: date
        })
      }

   render(){
     var data = this.props.data.updateDocument[0];
      return(
         <div className="DocForm">
            <div className="headerWindow">
               Добавить новый документ
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="programmNumber" placeholder="№ программы" defaultValue={data.programmNumber} />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="fullName" placeholder="Ф.И.О." defaultValue={data.fullName} />
            </div>
            <div className="col-xs-6">
               <select id="company" className="form-control" name="company" >
                   <option value="ЛАЭС-1">ЛАЭС-1</option>
                   <option value="ЛАЭС-2">ЛАЭС-2</option>
               </select>
            </div>
            <div>
            </div>
            <div className="col-xs-6">
               <select id="personnelCategory" className="form-control" name="personnelCategory" >
                  <option defaultValue="" hidden>Категория персонала</option>
                   <option value="Оперативный">Оперативный</option>
                   <option value="Ремонтный">Ремонтный</option>
                   <option value="Административный">Административный</option>
                   <option value="Руководители">Руководители</option>
                   <option value="Специалисты">Специалисты</option>
                   <option value="Рабочие">Рабочие</option>
               </select>
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" id="subdivision" name="subdivision" placeholder="Подразделение" defaultValue={data.subdivision} />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" id="position" name="position" placeholder="Должность" defaultValue={data.position} />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="theoreticalTraining" placeholder="Теоретическая подготовка" defaultValue={data.theoreticalTraining} />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="practicalTraining" placeholder="Практическая подготовка" defaultValue={data.practicalTraining} />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="internship" placeholder="Стажировка" defaultValue={data.internship} />
            </div>
            <div className="col-xs-6">
              <DatePickerInput name="termOfTraining" className="my-custom-datepicker-component" placeholder="Срок подготовки обучения" defaultValue={data.termOfTraining} onChange={this.termOfTraining} />
            </div>
            <div className="col-xs-6">
               <DatePickerInput name="trainingInTheUTC" className="my-custom-datepicker-component" placeholder="Обучение в УТЦ" defaultValue={data.trainingInTheUTC} onChange={this.trainingInTheUTC} />
            </div>
            <div className="col-xs-6">
               <DatePickerInput name="trainingInTheUnit" className="my-custom-datepicker-component" placeholder="Обучение в подразделении" defaultValue={data.trainingInTheUnit} onChange={this.trainingInTheUnit} />
            </div>
            <div className="col-xs-6">
               <DatePickerInput name="registrationDateOfTheProgram" className="my-custom-datepicker-component" placeholder="Дата регистрации программы" defaultValue={data.registrationDateOfTheProgram} onChange={this.registrationDateOfTheProgram} />
            </div>
            <div className="col-xs-6">
               <DatePickerInput name="dateOfDelivery" className="my-custom-datepicker-component" placeholder="Дата сдачи программы" defaultValue={data.dateOfDelivery} onChange={this.dateOfDelivery} />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="fullNameProgram" placeholder="Ф.И.О. (Сдающий программу)" defaultValue={data.fullNameProgram} />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="link" placeholder="Ссылка" defaultValue={data.link} />
            </div>
            <div className="col-xs-6">
               <button type="button" className="btn btn-danger btn-lg btn-block" onClick={this.newStateUpdateForm}>Закрыть</button>
            </div>
            <div className="col-xs-6">
               <button type="button" className="btn btn-success btn-lg btn-block" onClick={this.handleSend}>Отправить</button>
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
      newDocument: (state) => {
         dispatch({ type: 'NEW_DOCUMENT', payload: state });
      }
   })
)(DocForm);
