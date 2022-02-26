const DOMform = {
    form: '#form',
    nameForm: '#name',
    phoneForm: '#phone',
    emailForm: '#email',
    productForm: '#product',
};

const getDomForm = () => DOMform;

const getFormData = () => {
    return {
        name: document.querySelector(DOMform.nameForm).value,
        phone: document.querySelector(DOMform.phoneForm).value,
        email: document.querySelector(DOMform.emailForm).value,
        product: document.querySelector(DOMform.productForm).value,
    };
};

export {getDomForm, getFormData};
