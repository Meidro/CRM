import store from '../model.js';
import {getDOMtable, renderTable} from './table.view.js';

const DomTable = getDOMtable();

store.subscribe(renderTable);

store.dispatch({type: 'INIT'});

document.querySelector(DomTable.productSelect).addEventListener('change', (e) => {
    sessionStorage.setItem('selectValue', e.target.value);
    store.dispatch({type: 'SET_SELECT_VALUE', value: e.target.value});
});

document.querySelectorAll(DomTable.statusBars).forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.closest('[data-value]')) {
            sessionStorage.setItem('statusBarValue', e.target.dataset.value);
            store.dispatch({type: 'SET_STATUS_BAR_VALUE', value: e.target.dataset.value});
        }
        document.querySelectorAll('[data-value]').forEach((item) => item.classList.remove('active'));
        document
            .querySelectorAll(`[data-value="${e.target.dataset.value}"]`)
            .forEach((item) => item.classList.add('active'));
    });
});
