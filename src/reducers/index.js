import { combineReducers } from 'redux';

import newAddForm from './newAddForm'
import newDocument from './newDocument'
import quickSearch from './quickSearch'

export default combineReducers({
   newAddForm,
   newDocument,
   quickSearch
})
