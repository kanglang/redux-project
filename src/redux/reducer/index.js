import { combineReducers } from 'redux'
import pageTitleReducer from './pageTitleReducer';
import infoListReducer from "./infoListReducer";

const rootReducer = combineReducers({
    pageTitle: pageTitleReducer,
    infoList: infoListReducer
})
export default rootReducer;