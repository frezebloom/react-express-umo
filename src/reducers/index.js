import { combineReducers } from 'redux';

import showAddForm from './showAddForm'
import quickSearch from './quickSearch'
import allDocuments from './allDocuments'
import updateDocument from './updateDocument'
import showUpdateForm from './showUpdateForm'
import addValidation from './addValidation'
import showAddValidationForm from './showAddValidationForm'
import showTrashModalWindow from './showTrashModalWindow'
import showTrashMessage from './showTrashMessage'
import showUpdateValidation from './showUpdateValidation'
import showTable from './showTable'
import showSearchForm from './showSearchForm'
import searchDocuments from './searchDocuments'
import showQuickSearch from './showQuickSearch'
import showSearchTable from './showSearchTable'
import distributionOfTraining from './distributionOfTraining'
import showInfo from './showInfo'
import coordinates from './coordinates'

export default combineReducers({
   showAddForm,
   showUpdateForm,
   showAddValidationForm,
   quickSearch,
   allDocuments,
   updateDocument,
   addValidation,
   showTrashModalWindow,
   showTrashMessage,
   showUpdateValidation,
   showTable,
   showSearchForm,
   searchDocuments,
   showQuickSearch,
   showSearchTable,
   distributionOfTraining,
   showInfo,
   coordinates,
})
