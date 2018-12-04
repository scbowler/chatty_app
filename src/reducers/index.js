import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import chat from './chat_reducer';

// import { reducer as formReducer } from 'redux-form';
// import chatReducer from './chat_reducer';

//const rootReducer = combineReducers({ 
//     chat: chatReducer,
//     form: formReducer 
// });

const rootReducer = combineReducers({ chat, form });

export default rootReducer;
