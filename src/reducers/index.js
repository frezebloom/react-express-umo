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
<<<<<<< HEAD
import showUpdateValidation from './showUpdateValidation'
=======
>>>>>>> bf8b45855b2f573fb807351f2ccb5221d1cbaf51

export default combineReducers({
   showAddForm,
   showUpdateForm,
   showAddValidationForm,
   quickSearch,
   allDocuments,
   updateDocument,
   addValidation,
   showTrashModalWindow,
<<<<<<< HEAD
   showTrashMessage,
   showUpdateValidation
=======
   showTrashMessage
>>>>>>> bf8b45855b2f573fb807351f2ccb5221d1cbaf51

})
