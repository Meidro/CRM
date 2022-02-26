import store from '../model.js';
import {fillEditForm, getEditDom, getEditFormData} from './edit.view.js';

store.dispatch({type: 'INIT'});

// не понятен смысл ссылки на редактирование заявки в самом верху страници, так как
//  не ясно какую заявку редактировать. Поэтому по умолчанию сделал UrlParam = 1.
const UrlParam = +new URLSearchParams(location.search).get('id') || 1;
const requests = store.getState().requests;

// если при переходе по верхней ссылке на редактирование массив с заявками пуст, то ничего не делаем
requests.length && fillEditForm(requests.find((item) => item.id === UrlParam));

document.querySelector(getEditDom().form).addEventListener('submit', (e) => {
    e.preventDefault();
    store.dispatch({type: 'FILL_EDIT_FORM', formData: getEditFormData()});
    location.href = 'table.html';
});
