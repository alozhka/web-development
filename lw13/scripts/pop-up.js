window.onload = main;

function main() {
    debugger;

    const animationDelay = 1; //ms
    let errorStatus = false;
    const upButton = document.getElementsByClassName('upper_frame_button')[0];
    const mainButton = document.getElementsByClassName('upper_frame_main_button')[0];

    const popUp = document.createElement('div');
    const form = document.createElement('div');
    let overlay = document.createElement('div');
    const blackout = document.createElement('div');
    blackout.classList.add('blackout');

    upButton.addEventListener('click', onButtonClick);
    mainButton.addEventListener('click', onButtonClick);
    blackout.addEventListener('click', popupClose);
    window.addEventListener('scroll', onWindowScroll);

    overlay.classList.add('overlay');
    overlay.appendChild(blackout);
    overlay.appendChild(createPopup());

    const errorMassage = document.createElement('div');
    errorMassage.innerHTML =
        `<p class="error-message">Упс.. Произошла ошибка!</p>`;

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Escape')
            popupClose()
    });

    function onButtonClick() {
        document.body.appendChild(overlay);
        setTimeout(() => {
            popUp.classList.add('popUpShow');
            blackout.classList.add('blackoutShow');
        }, animationDelay);

        const cross = document.getElementsByClassName('form-crossbar__image')[0];
        cross.addEventListener('click', popupClose);

        const sendFormButton = document.getElementById('submit__button');
        sendFormButton.addEventListener('click', sendForm)
    };

    function onWindowScroll() {
        overlay.style.top = window.scrollY + 'px'
    };

    function createPopup() {
        popUp.classList.add('popUp');
        form.innerHTML =
            '<div class="form" id="pop-up">\n' +
                '<div class="form-crossbar">\n' +
                    '<img class="form-crossbar__image"\n' +
                        'alt="крестик"\n' +
                        'src="images/cross.svg"/>\n' +
                '</div>\n' +
                    '<img class="form__image"\n' +
                         'src="images/form-image.webp"\n' +
                         'alt="welcome"/>\n' +
                    '<div class="form-header">\n' +
                        '<h3 class="form-header__text">Записаться на курс</h3>\n' +
                    '</div>\n' +
                    '<div class="form-data">\n' +
                        '<form id="ajax-form" class="form-data" method="POST" action="">\n' +
                            '<label class="form-label">\n' +
                                '<input id="ajax-form__name" required class="form-label form-label__text" type="text" name="name" placeholder="Ваше имя" pattern="[А-Яа-я]+"/>\n' +
                            '</label>\n' +
                            '<label class="form-label">\n' +
                                '<input id="ajax-form__email" required class="form-label form-label__text" type="email" name="email" placeholder="Email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$"/>\n' +
                            '</label>\n' +
                            '<label class="form-label">\n' +
                                '<select required id="ajax-form__activity" name="{%activity%}" class="form-select form-label__text">\n' +
                                    '<option style="display: none" selected disabled>Деятельность</option>\n' +
                                    '<option value="programmer">Программист</option>\n' +
                                    '<option value="designer">Дизайнер</option>\n' +
                                    '<option value="marketer">Маркетолог</option>\n' +
                                '</select>\n' +
                            '</label>\n' +
                            '<div class="form-checkbox">\n' +
                                '<input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" class="subscribe-block"/>\n' +
                                '<label for="subscribeNews" class="form-checkbox__text">\n' +
                                    'Согласен получать информационные материалы о старте курса\n' +
                                '</label>\n' +
                            '</div>\n' +
                            '<p>\n' +
                                '<input id="submit__button" class="submit-block" type="submit" value="Записаться на курс"/>\n' +
                            '</p>\n' +
                        '</form>\n' +
                    '</div>\n' +
                '</div>';
        popUp.appendChild(form);
        return popUp
    };

    function  popupClose() {
        const overlay = document.getElementsByClassName('overlay')[0];
        setTimeout( () => {
            document.body.removeChild(overlay);
            if (errorStatus === true) {
                popUp.removeChild(errorMassage)
                popUp.appendChild(form)
                errorStatus = false
            }
        }, 220);
        popUp.classList.remove('popUpShow');
        blackout.classList.remove('blackoutShow')
    };

    function showErrorMessage () {
        popUp.removeChild(form);
        popUp.appendChild(errorMassage);
        errorStatus = true
    };
//*      ajax       *//

    async function sendForm(Event) {
        Event.preventDefault();
        const name = document.getElementById('ajax-form__name');
        const email = document.getElementById('ajax-form__email');
        const news = document.getElementById('subscribeNews');
        const activity = document.getElementById('ajax-form__activity');

        if (validation(name) && validation(email) && validation(activity)) {
            // 1. - Чтобы имя состояло только из буквенных символов, иначе подсвечивается красным после нажатия на кнопку
            // 2. + Email проверялся на валидность, в случае невалидности подсвечивается красным после нажатия на кнопку
            // 3. + Если поле пустое, то поле подсвечивается красным, как в дизайне.

            let data = JSON.stringify({
                name: name.value,
                email: email.value,
                activity: activity.value,
                news: news.value
            });

            const response = await fetch('register.php', {
                method: 'POST', //мы отправляем данные на сервер, значит POST
                body: data, // отправляем ранее созданный json объект data
                headers: {
                    'Content-Type': 'application/json' //отправляем заголовки запроса
                }
            });

            if (response.ok)
                // если HTTP-статус в диапазоне 200-299
                popupClose()
            else if (response.status === 500)
                // иначе, что-то пошло не так, говорим об этом пользователю.
                showErrorMessage()
            else
                alert('Код ошибки: '.response.status);
        }
    };

    function validation(e) {
        if(e.validity.patternMismatch) {
            showError(e);
            return false
        } else if (e.validity.valueMissing) {
            showError(e);
            return false
        }
        return true
    };

    function showError(e) {
        e.classList.add('form-error')
    }
}