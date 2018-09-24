function followButton() {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
    } else {
        this.classList.add('active')
    }
}

document.getElementById('followButton').addEventListener('click', followButton)

function readButton() {
    const textEl = document.getElementsByClassName('clippedText')
    for (let i = 0; i < textEl.length; i++) {
        if (textEl[i].classList.contains('less')) {
            this.innerHTML = 'read less'
            textEl[i].classList.remove('less')
        } else {
            this.innerHTML = 'read more'
            textEl[i].classList.add('less')
        }
    }
}

document.getElementById('readButton').addEventListener('click', readButton)
