class Player {
    constructor() {
        this.username = sessionStorage.getItem('username')
        this.usernameDisplay = document.getElementById('username-display')
        if (!this.username) {
            window.location.href = '../index.html'
        }
        this.usernameDisplay.textContent = this.username
    }
}