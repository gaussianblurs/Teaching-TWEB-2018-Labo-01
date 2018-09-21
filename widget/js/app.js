function pressButton() {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
    } else {
        this.classList.add('active')
    }
}

document.getElementById('followButton').addEventListener('click', pressButton)
