function validationTel() {
    let tel = document.getElementById('tel-reg').value;
    let telInput = document.getElementById('tel-reg');
    let textTel = document.querySelector('.form__error--tel');
    let patternTel = /^((\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\-]{7,10}$/;

    if (tel.match(patternTel)) {
        telInput.classList.remove('error');
        telInput.classList.add('correct');

    } else {
        telInput.classList.add('error');
        telInput.classList.remove('correct');
        textTel.innerHTML = "Телефон указан неверно. Должно быть 11 цифр, например: +7 (900) 800-70-60";
    }

    if (tel == '') {
        telInput.classList.remove('error');
        telInput.classList.remove('correct');
        textTel.innerHTML = "";
    }

    if (tel == '+') {
        telInput.classList.remove('error');
        telInput.classList.remove('correct');
        textTel.innerHTML = "";
    }

    if (tel == '+7 (') {
        telInput.classList.remove('error');
        telInput.classList.remove('correct');
        textTel.innerHTML = "";
    }
};

function validationMail() {
    let email = document.getElementById('email-reg').value;
    let emailInput = document.getElementById('email-reg');
    let textMail = document.querySelector('.form__error--mreg');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

    if (email.match(pattern)) {
        emailInput.classList.remove('error');
        emailInput.classList.add('correct');

    } else {
        emailInput.classList.add('error');
        emailInput.classList.remove('correct');
        textMail.innerHTML = "Поле email заполнено не верно. Оно должно содержать латинские буквы и @";
    }

    if (email == '') {
        emailInput.classList.remove('error');
        emailInput.classList.remove('correct');
        textMail.innerHTML = "";
    }
}

function validationMailEnter() {
    let emailE = document.getElementById('email').value;
    let emailEInput = document.getElementById('email');
    let textMailE = document.querySelector('.form__error--mail');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

    if (emailE.match(pattern)) {
        emailEInput.classList.remove('error');
        emailEInput.classList.add('correct');

    } else {
        emailEInput.classList.add('error');
        emailEInput.classList.remove('correct');
        textMailE.innerHTML = "Поле email заполнено не верно. Оно должно содержать латинские буквы и @";
    }

    if (emailE == '') {
        emailEInput.classList.remove('error');
        emailEInput.classList.remove('correct');
        textMailE.innerHTML = "";
    }
}

function validationName() {
    let name = document.getElementById('name').value;
    let nameInput = document.getElementById('name');
    let textName = document.querySelector('.form__error--name');
    let pattern = /^[а-яА-ЯёЁ]+$/;

    if (name.match(pattern)) {
        nameInput.classList.remove('error');
        nameInput.classList.add('correct');

    } else {
        nameInput.classList.add('error');
        nameInput.classList.remove('correct');
        textName.innerHTML = "Допускается использование только кириллицы";
    }

    if (name == '') {
        nameInput.classList.remove('error');
        nameInput.classList.remove('correct');
        textName.innerHTML = "";
    }
}

function validationSurname() {
    let surname = document.getElementById('surname').value;
    let surnameInput = document.getElementById('surname');
    let textSur = document.querySelector('.form__error--surname');
    let pattern = /^[а-яА-ЯёЁ]+$/;

    if (surname.match(pattern)) {
        surnameInput.classList.remove('error');
        surnameInput.classList.add('correct');

    } else {
        surnameInput.classList.add('error');
        surnameInput.classList.remove('correct');
        textSur.innerHTML = "Допускается использование только кириллицы";
    }

    if (surname == '') {
        surnameInput.classList.remove('error');
        surnameInput.classList.remove('correct');
        textSur.innerHTML = "";
    }
}

function validationPatr() {
    let patr = document.getElementById('patronymic').value;
    let patrInput = document.getElementById('patronymic');
    let textPatr = document.querySelector('.form__error--patronymic');
    let pattern = /^[а-яА-ЯёЁ]+$/;

    if (patr.match(pattern)) {
        patrInput.classList.remove('error');
        patrInput.classList.add('correct');

    } else {
        patrInput.classList.remove('correct');
        patrInput.classList.add('error');
        textPatr.innerHTML = "Допускается использование только кириллицы";
    }

    if (patr == '') {
        patrInput.classList.remove('error');
        patrInput.classList.remove('correct');
        textPatr.innerHTML = "";
    }
}
