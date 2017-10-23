import { combineReducers } from 'redux';

import showAddForm from './showAddForm'
import quickSearch from './quickSearch'
import allDocuments from './allDocuments'
import updateDocument from './updateDocument'
import showUpdateForm from './showUpdateForm'
import validation from './validation'
import showValidationForm from './showValidationForm'

export default combineReducers({
   showAddForm,
   showUpdateForm,
   showValidationForm,
   quickSearch,
   allDocuments,
   updateDocument,
   validation

})
