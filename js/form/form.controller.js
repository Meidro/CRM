import store from '../model.js';
import {renderTestData} from './form.test-data.js';
import {getFormData, getDomForm} from './form.view.js';

const DOM = getDomForm();

store.dispatch({type: 'INIT'});

document.querySelector(DOM.form).addEventListener('submit', (e) => {
    e.preventDefault();
    store.dispatch({type: 'ADD_REQUEST', formData: getFormData()});

    renderTestData();
});
