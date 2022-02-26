const DOMtable = {
    tbody: '#tbody',
    statusBars: '#topStatusBar, #leftStatusBar',
    productSelect: '#productSelect',
    badge: '#badge',
};

const getDOMtable = () => DOMtable;

// фкнкция вставки заявок в зависимости от значения select и status
const appendRequests = (requestEl, requestContainer, state, product, status) => {
    if (state.selectValue !== 'all' && state.statusBarValue !== 'all') {
        product === state.selectValue && status === state.statusBarValue && requestContainer.append(requestEl);
    } else if (state.selectValue !== 'all') {
        product === state.selectValue && requestContainer.append(requestEl);
    } else if (state.statusBarValue !== 'all') {
        status === state.statusBarValue && requestContainer.append(requestEl);
    } else {
        requestContainer.append(requestEl);
    }
};

// в зависимости от state, установка подсветки фильтра по статусу и установка select
const setSelectValue = (state) => {
    document.querySelector(DOMtable.productSelect).value = state.selectValue;
    document.querySelectorAll(`[data-value="${state.statusBarValue}"]`).forEach((item) => item.classList.add('active'));
};

// установка значений badget
const setBadgets = (state) => {
    document.querySelectorAll(DOMtable.badge).forEach((item) => {
        const datasetValue = item.closest('[data-value]').dataset.value;
        item.textContent = state.badgesValue[datasetValue] > 0 ? state.badgesValue[datasetValue] : '';
    });
};

const renderTable = (state) => {
    setSelectValue(state);
    setBadgets(state);

    const requestContainer = document.querySelector(DOMtable.tbody);
    requestContainer.innerHTML = '';

    state.requests.forEach(({id, date, product, name, email, phone, status}) => {
        const requestEl = document.createElement('tr');
        const html = `<th scope="row">${id}</th>
            <td>${date}</td>
            <td>${state.products[product]}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>
                <div class="badge badge-pill badge-${state.requestStatus[status]?.badgeClass}">
                    ${state.requestStatus[status]?.badgeText || 'не выбран'}
                </div>
            </td>
            <td>
            <a href="edit.html?id=${id}">Редактировать</a>
            </td>`;
        requestEl.innerHTML = html;

        appendRequests(requestEl, requestContainer, state, product, status);
    });
};

export {getDOMtable, renderTable};
