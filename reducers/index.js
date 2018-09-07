import { combineRecuers } from 'redux';
import chat_reducer from './chat_reducer';
import { reducer as form } from 'redux-form';

export default combineRecuers({form,chat_reducer});