const ExampleItem = function (name, phone, email, product) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.product = product;
};

const testData = [
    new ExampleItem('Иван Иванов', '+7 (999) 568-34-56', 'ivan@mail.ru', 'course-vue'),
    new ExampleItem('Сидор Сидоров', '+7 (909) 765-43-21', 'sidor@yandex.ru', 'course-html'),
    new ExampleItem('Петр Петров', '+7 (912) 456-78-90', 'petya@yandex.ru', 'course-php'),
    new ExampleItem('Александр Пушкин', '+7 (906) 654-12-67', 'pushka@gmail.ru', 'course-js'),
    new ExampleItem('Den Abramov', '+7 (999) 098-67-89', 'abramov@mail.ru', 'course-wordpress'),
    new ExampleItem('Вася Васильев', '+7 (928) 098-76-54', 'vasya@yandex.ru', 'course-html'),
    new ExampleItem('Евгений Минибаев', '+7 (951) 425-15-80', 'qwerty@gmail.ru', 'course-js'),
];

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const renderTestData = () => {
    const randomItem = testData[getRandomInt(testData.length)];
    document.querySelector('#name').value = randomItem.name;
    document.querySelector('#phone').value = randomItem.phone;
    document.querySelector('#email').value = randomItem.email;
    document.querySelector('#product').value = randomItem.product;
};

renderTestData();

export {renderTestData};
