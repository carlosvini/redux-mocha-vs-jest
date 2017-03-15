import { combineReducers } from 'redux';
import {
    ADD_ITEM,
    SET_FORM_TEXT
} from '../actions/types';

const rootReducer = combineReducers({
    formText: (state = '', action) => {
        switch (action.type) {
            case SET_FORM_TEXT:
                return action.payload;
            case ADD_ITEM:
                return '';
            default:
                return state;
        }
    },
    languages: (state = ['Javascript', 'Ruby', 'Rails', 'PHP', 'Java', 'C#', 'Python'], action) => {
        switch (action.type) {
            case ADD_ITEM:
                state = [ ...state, action.payload ];
                return state;
            default:
                return state;
        }
    }
});

export default rootReducer;