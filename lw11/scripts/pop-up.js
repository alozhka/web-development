window.onload = main

function main() {
    debugger

    const animationDelay = 1; //ms
    const upButton = document.getElementsByClassName('upper_frame_button')[0]
    const mainButton = document.getElementsByClassName('upper_frame_main_button')[0]

    const popUp = document.createElement('div')
    let overlay = document.createElement('div')
    const blackout = document.createElement('div');
    blackout.classList.add('blackout');

    upButton.addEventListener('click', onButtonClick)
    mainButton.addEventListener('click', onButtonClick)
    blackout.addEventListener('click', popupClose)
    window.addEventListener('scroll', onWindowScroll)
    overlay.classList.add('overlay')
    overlay.appendChild(blackout)
    overlay.appendChild(createPopup())

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Escape')
            popupClose()
    });

    function onButtonClick() {
        document.body.appendChild(overlay)
        setTimeout(() => {
            popUp.classList.add('popUpShow')
            blackout.classList.add('blackoutShow')
        }, animationDelay)

        const cross = document.getElementsByClassName('form-crossbar__image')[0];
        cross.addEventListener('click', popupClose)

        const sendFormButton = document.getElementById('submit__button')
        sendFormButton.addEventListener('click', sendForm)
        //всю логику сюда
    }

    function onWindowScroll() {
        overlay.style.top = window.scrollY + 'px'
    }

    function createPopup() {
        popUp.classList.add('popUp');
        popUp.innerHTML =
            '<div class="form" id="pop-up">\n' +
            '    <div class="form-crossbar">\n' +
            '        <img class="form-crossbar__image"\n' +
            '            alt="крестик"\n' +
            '            src="images/cross.png"/>\n' +
            '    </div>\n' +
            '        <img class="form__image"\n' +
            '             src="images/form-image.png"\n' +
            '             alt="welcome"/>\n' +
            '        <div class="form-header">\n' +
            '            <h3 class="form-header__text">Записаться на курс</h3>\n' +
            '        </div>\n' +
            '        <div class="form-data">\n' +
            '            <form id="ajax-form" class="form-data" method="POST" action="">\n' +
            '                <label class="form-label">\n' +
            '                    <input id="ajax-form__name" class="form-label form-label__text" type="text" name="name" placeholder="Ваше имя"/>\n' +
            '                </label>\n' +
            '                <label class="form-label">\n' +
            '                    <input id="ajax-form__email" class="form-label form-label__text" type="email" name="email" placeholder="Email"/>\n' +
            '                </label>\n' +
            '                <label class="form-label">\n' +
            '                    <select name="{%activity%}" class="form-select form-label__text">\n' +
            '                        <option style="display: none" selected disabled>Деятельность</option>\n' +
            '                        <option value="programmer">Программист</option>\n' +
            '                        <option value="designer">Дизайнер</option>\n' +
            '                        <option value="marketer">Маркетолог</option>\n' +
            '                    </select>\n' +
            '                </label>\n' +
            '                <div class="form-checkbox">\n' +
            '                    <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" class="subscribe-block"/>\n' +
            '                    <label for="subscribeNews" class="form-checkbox__text">\n' +
            '                        Согласен получать информационные материалы о старте курса\n' +
            '                    </label>\n' +
            '                </div>\n' +
            '                <p>\n' +
            '                    <input id="submit__button" class="submit-block" type="submit" value="Записаться на курс"/>\n' +
            '                </p>\n' +
            '            </form>\n' +
            '        </div>\n' +
            '    </div>'
        return popUp
    }

    function  popupClose() {
        const overlay = document.getElementsByClassName('overlay')[0]
        setTimeout( () => {
            document.body.removeChild(overlay)
        }, 220)
        popUp.classList.remove('popUpShow')
        blackout.classList.remove('blackoutShow')
    }

//*      ajax       *//

    function validation(e) {
        if(e.validity.typeMismatch) {
            showError(e);
            return false;
        }
        if (e.validity.valueMissing) {
            showError(e);
            return false;
        }
        return true;
    }

    function sendForm(e) {
        e.preventDefault()
        const name = document.getElementById('ajax-form__name')
        const email = document.getElementById('ajax-from__email')

        if (validation(name) && validation(email)) {
            let data = JSON.stringify({
                name: name.value,
                email: email.value
            })
        }

        const sendUser = async () => {
            try {
                let response = await fetch(document.forms.user.action, {
                    method: 'post',
                    body: data
                });
                if (response.ok) {
                    let result = await response.json();
                    document.forms.user.querySelectorAll('.error').forEach(el => {
                        el.textContent = '';
                    })
                    if (result['result'] === 'error') {
                        const errors = result['error'];
                        for (const [key, value] of Object.entries(errors)) {
                            document.forms.user.querySelector(`[name="${key}"]`).nextElementSibling.textContent = value;
                        }
                    } else {
                        document.forms.user.reset();
                        document.forms.user.closest('.form-wrapper').classList.add('form-success');
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
        }

        const response = await fetch('register.php', {
            method: 'POST', //мы отправляем данные на сервер, значит POST
            body: data, // отправляем ранее созданный json объект data
            headers: {
                'Content-Type': 'application/json' //отправляем заголовки запроса
            }
        })
            .then((response) => response.json())


        if (response.ok) {
            // если HTTP-статус в диапазоне 200-299
            popupClose();
            alert('closed')//4. В случае успешного результата попап с формой должен закрыться.
        } else if (response.status === 500) {
            // иначе, что-то пошло не так, говорим об этом пользователю.
            alert('В случае 500 ошибки все элементы попапа удаляются и появляется сообщение: Упс… Произошла ошибка!');
        } else {
            alert('Код ошибки: '.response.status);
        }
    }

    function showError(e) {
        e.classList.add('form-error')
    }
}