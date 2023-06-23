class Plant {
    constructor() {
        this.images = [
            "../Sprites/Seeds/IcePeaSeed.png",
            "../Sprites/Seeds/PeaShooterSeed.png",
            "../Sprites/Seeds/PeaShooterSeed.png",
            "../Sprites/Seeds/WallNutSeed.png",
        ];

        this.display = document.getElementById('plant-card');
        for (let index = 0; index < this.images.length; index++) {
            const randomIndex = Math.floor(Math.random() * this.images.length);
            const div = `<div><img src="${this.images[randomIndex]}" alt=""></div>`;
            this.display.insertAdjacentHTML('afterbegin', div);
        }

    }

}