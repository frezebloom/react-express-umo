import React, { Component } from 'react';
import { connect } from 'react-redux';
import edit from '../img/edit.png';

class Table extends Component {
   render(){
     console.log(this.props);
      var keys = new Date().getTime();
      return(
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
                  <td className="cap">Распределение обучения</td>
                  <td className="cap">Срок подготовки обучения</td>
                  <td className="cap">Обучение в УТЦ</td>
                  <td className="cap">Обучение в подразделении</td>
                  <td className="cap">Дата регистрации программы</td>
                  <td className="cap">Дата сдачи программы</td>
                  <td className="cap">Ф.И.О.</td>
                  <td className="cap">Ссылка</td>
               </tr>
               {this.props.data.newDocument.map((doc, index) =>
                  <tr key={index+(1*keys)}>
                     <td key={index+(2*keys)}><img src={edit} className="iconEdit" alt="Изменить" /></td>
                     <td key={index+(3*keys)}>{doc.programmNumber}</td>
                     <td key={index+(4*keys)}>{doc.fullName}</td>
                     <td key={index+(5*keys)}>{doc.company}</td>
                     <td key={index+(6*keys)}>{doc.personnelCategory}</td>
                     <td key={index+(7*keys)}>{doc.subdivision}</td>
                     <td key={index+(8*keys)}>{doc.position}</td>
                     <td key={index+(9*keys)}>{doc.distributionOfTraining}</td>
                     <td key={index+(10*keys)}>{doc.termOfTraining}</td>
                     <td key={index+(11*keys)}>{doc.trainingInTheUTC}</td>
                     <td key={index+(12*keys)}>{doc.trainingInTheUnit}</td>
                     <td key={index+(13*keys)}>{doc.registrationDateOfTheProgram}</td>
                     <td key={index+(14*keys)}>{doc.dateOfDelivery}</td>
                     <td key={index+(15*keys)}>{doc.fullName2}</td>
                     <td key={index+(16*keys)}>{doc.link}</td>
                  </tr>
               )}
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

   })
)(Table);
