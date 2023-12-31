class Timer {
    constructor() {
        this.second = 0
        this.centiSecond = 0

        this.intervalId = null

        this.display = document.getElementById('timer-display')

        document.getElementById('timer-start-button').addEventListener('click', this.start.bind(this))
        document.getElementById('timer-stop-button').addEventListener('click', this.stop.bind(this))
        document.getElementById('timer-reset-button').addEventListener('click', this.reset.bind(this))
    }
    start() {
        this.intervalId = setInterval(() => {
            this.update()
        }, 16, 66666666666667);
    }
    update() {
        this.centiSecond++
        if (this.centiSecond >= 60) {
            this.second++
            this.centiSecond = 0
        }
        this.display.textContent = this.second.toString().padStart(3, 0) + ':' + this.centiSecond.toString().padStart(2, 0)
        if (this.centiSecond >= 60) {
            clearInterval(this.intervalId)
            this.start()
        }
        if (this.second >= 999 && this.centiSecond >= 59) {
            this.stop()
        }
    }
    stop() {
        clearInterval(this.intervalId)
    }
    reset() {
        this.stop()
        this.second = 0
        this.centiSecond = 0
        this.display.textContent = '000:00'
    }
}