const store = {
    state: {
        requests: [],
        products: {
            'course-html': 'Курс по верстке',
            'course-js': 'Курс по JavaScript',
            'course-vue': 'Курс по VUE JS',
            'course-php': 'Курс по PHP',
            'course-wordpress': 'Курс по WordPress',
        },
        requestStatus: {
            new: {badgeClass: 'danger', badgeText: 'Новый'},
            inwork: {badgeClass: 'warning', badgeText: 'В работе'},
            complete: {badgeClass: 'success', badgeText: 'Завершенный'},
        },
        selectValue: null,
        statusBarValue: null,
        subscribers: [],
        badgesValue: {
            all: 0,
            new: 0,
            inwork: 0,
            complete: 0,
        },
    },

    getState() {
        return this.state;
    },

    subscribe(callback) {
        this.state.subscribers.push(callback);
    },

    notify(state) {
        this.state.subscribers.forEach((callback) => callback(state));
    },

    dispatch(action) {
        switch (action.type) {
            case 'INIT':
                this.state.requests = JSON.parse(localStorage.getItem('requests')) || [];
                this.state.selectValue = sessionStorage.getItem('selectValue') || 'all';
                this.state.statusBarValue = sessionStorage.getItem('statusBarValue') || 'all';
                this.state.requests.forEach((item) => this.state.badgesValue[item.status]++);
                this.state.badgesValue.all = this.state.requests.length;
                this.notify(this.state);
                return;
            case 'ADD_REQUEST':
                const request = {
                    id: this.state.requests[this.state.requests.length - 1]?.id + 1 || 1,
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString(),
                    status: 'new',
                    ...action.formData,
                };
                this.state.requests.push(request);
                localStorage.setItem('requests', JSON.stringify(this.state.requests));
                return;
            case 'SET_SELECT_VALUE':
                this.state.selectValue = action.value;
                this.notify(this.state);
                return;
            case 'SET_STATUS_BAR_VALUE':
                this.state.statusBarValue = action.value;
                this.notify(this.state);
                return;
            case 'FILL_EDIT_FORM':
                if (this.state.requests.length) {
                    const {id, status, name, product, email, phone} = action.formData;
                    const request = this.state.requests.find((item) => item.id === id);
                    request.status = status;
                    request.name = name;
                    request.product = product;
                    request.email = email;
                    request.phone = phone;
                    localStorage.setItem('requests', JSON.stringify(this.state.requests));
                }
                return;
            default:
                return;
        }
    },
};

export default store;
