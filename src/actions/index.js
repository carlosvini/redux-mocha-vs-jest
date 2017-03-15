import {
    ADD_ITEM,
    SET_FORM_TEXT
} from './types';

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export function setFormText(text) {
    return {
        type: SET_FORM_TEXT,
        payload: text
    }
}