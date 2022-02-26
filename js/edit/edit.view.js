const editDOM = {
    form: '#form',
    number: '#number',
    date: '#date',
    product: '#product',
    name: '#name',
    email: '#email',
    phone: '#phone',
    status: '#status',
};

const getEditDom = () => editDOM;

const fillEditForm = ({id, date, time, product, name, email, phone, status}) => {
    const editForm = document.querySelector(editDOM.form);
    editForm.querySelector(editDOM.number).textContent = id;
    editForm.querySelector(editDOM.date).textContent = `${date}  ${time}`;
    editForm.querySelector(editDOM.product).value = product;
    editForm.querySelector(editDOM.name).value = name;
    editForm.querySelector(editDOM.email).value = email;
    editForm.querySelector(editDOM.phone).value = phone;
    editForm.querySelector(editDOM.status).value = status;
};

const getEditFormData = () => {
    return {
        id: +document.querySelector(editDOM.number).textContent,
        product: document.querySelector(editDOM.product).value,
        name: document.querySelector(editDOM.name).value,
        email: document.querySelector(editDOM.email).value,
        phone: document.querySelector(editDOM.phone).value,
        status: document.querySelector(editDOM.status).value,
    };
};
export {fillEditForm, getEditDom, getEditFormData};
