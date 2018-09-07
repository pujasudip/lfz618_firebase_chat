import { combineReducers } from 'redux';
import chat_reducer from './chat_reducer';
import { reducer as form } from 'redux-form';

export default combineReducers({form,chat_reducer});