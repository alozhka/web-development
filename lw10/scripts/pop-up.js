window.onload = main

function main() {
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
            '            <form class="form-data" method="POST" action="register.php">\n' +
            '                <label class="form-label">\n' +
            '                    <input class="form-label form-label__text" type="text" name="name" placeholder="Ваше имя"/>\n' +
            '                </label>\n' +
            '                <label class="form-label">\n' +
            '                    <input class="form-label form-label__text" type="email" name="email" placeholder="Email"/>\n' +
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
            '                    <input class="submit-block" type="submit" value="Записаться на курс"/>\n' +
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
}