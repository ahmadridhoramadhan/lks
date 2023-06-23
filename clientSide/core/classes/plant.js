class Plant {
    constructor() {
        this.images = [
            "../Sprites/Seeds/IcePeaSeed.png",
            "../Sprites/Seeds/PeaShooterSeed.png",
            "../Sprites/Seeds/PeaShooterSeed.png",
            "../Sprites/Seeds/WallNutSeed.png",
        ]

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }



        this.display = document.getElementById('plant-card')
        for (let index = 0; index < 4; index++) {
            const div = `<div><img src="${this.images[shuffleArray(this.images)]}" alt=""></div>`
            this.display.insertAdjacentHTML('afterbegin', div)
        }
        console.log(shuffleArray(this.images));
    }

}