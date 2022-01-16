import { combineReducers } from 'redux';
import clinicReducer from './clinicReducer';

const rootReducer = combineReducers({
  clinics: clinicReducer,
});

export default rootReducer;
