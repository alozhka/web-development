window.onload = main

function main() {
    const upButton = document.getElementsByClassName('upper_frame_button')[0]
    const mainButton = document.getElementsByClassName('upper_frame_main_button')[0]
    upButton.addEventListener('click', onButtonClick)
    mainButton.addEventListener('click', onButtonClick)

    let overlay = document.createElement('div')
    overlay.classList.add('overlay')
    overlay.appendChild(createPopup())
    overlay.addEventListener('click', popupClose)

    function onButtonClick() {
        document.body.appendChild(overlay)
    }

    function createPopup() {
        const popUp = document.createElement('div')
        popUp.classList.add('popUp')
        popUp.classList.add('popUpShow')
        
        popUp.innerHTML =
            '<div class="form" id="pop-up">\n' +
            '        <img class="form__image"\n' +
            '             src="images/form-image.png"\n' +
            '             alt="welcome"/>\n' +
            '        <div class="form-header">\n' +
            '            <h3 class="form-header__text">Записаться на курс</h3>\n' +
            '        </div>\n' +
            '        <div class="form-data">\n' +
            '            <form method="POST" action="register.php">\n' +
            '                <label>\n' +
            '                    <input class="form-label form-label__text" type="text" name="name" placeholder="{%name%}"/>\n' +
            '                </label>\n' +
            '                <label>\n' +
            '                    <input class="form-label form-label__text" type="email" name="email" placeholder="{%Email%}"/>\n' +
            '                </label>\n' +
            '                <label>\n' +
            '                    <select name="{%activity%}" class="form-label form-label__text">\n' +
            '                        <option selected disabled>Деятельность</option>\n' +
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
            '                    <input class="submit-block" type="submit" value="Записаться на курс"/>\n' +
            '                </p>\n' +
            '            </form>\n' +
            '        </div>\n' +
            '    </div>'

        return popUp
    }

    function  popupClose(event) {
        const overlay = document.getElementsByClassName('overlay')[0]
        document.body.removeChild(overlay)
    }
}