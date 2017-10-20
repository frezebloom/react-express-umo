import { combineReducers } from 'redux';

import showAddForm from './showAddForm'
import quickSearch from './quickSearch'
import allDocuments from './allDocuments'
import updateDocument from './updateDocument'
import showUpdateForm from './showUpdateForm'
import validation from './validation'

export default combineReducers({
   showAddForm,
   showUpdateForm,
   quickSearch,
   allDocuments,
   updateDocument,
   validation
})
