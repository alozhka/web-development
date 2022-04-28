{
    const popUp = document.getElementById('pop-up')
    const button = document.getElementsByClassName('button')
    popUp.classList.replace('form', 'hidden')

    button.onclick  = () => popUp.classList.replace('form', 'hidden')
}