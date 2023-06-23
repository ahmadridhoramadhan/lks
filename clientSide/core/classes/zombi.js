class Zombi {
    constructor() {
        this.images = [
            '../Sprites/Zombie/frame_00_delay-0.05s.gif',
            '../Sprites/Zombie/frame_01_delay-0.05s.gif',
            '../Sprites/Zombie/frame_02_delay-0.05s.gif',
            '../Sprites/Zombie/frame_03_delay-0.05s.gif',
            '../Sprites/Zombie/frame_04_delay-0.05s.gif',
            '../Sprites/Zombie/frame_05_delay-0.05s.gif',
            '../Sprites/Zombie/frame_06_delay-0.05s.gif',
            '../Sprites/Zombie/frame_07_delay-0.05s.gif',
            '../Sprites/Zombie/frame_08_delay-0.05s.gif',
            '../Sprites/Zombie/frame_09_delay-0.05s.gif',
            '../Sprites/Zombie/frame_10_delay-0.05s.gif',
            '../Sprites/Zombie/frame_11_delay-0.05s.gif',
            '../Sprites/Zombie/frame_12_delay-0.05s.gif',
            '../Sprites/Zombie/frame_13_delay-0.05s.gif',
            '../Sprites/Zombie/frame_14_delay-0.05s.gif',
            '../Sprites/Zombie/frame_15_delay-0.05s.gif',
            '../Sprites/Zombie/frame_16_delay-0.05s.gif',
            '../Sprites/Zombie/frame_17_delay-0.05s.gif',
            '../Sprites/Zombie/frame_18_delay-0.05s.gif',
            '../Sprites/Zombie/frame_19_delay-0.05s.gif',
            '../Sprites/Zombie/frame_20_delay-0.05s.gif',
            '../Sprites/Zombie/frame_21_delay-0.05s.gif',
            '../Sprites/Zombie/frame_22_delay-0.05s.gif',
            '../Sprites/Zombie/frame_23_delay-0.05s.gif',
            '../Sprites/Zombie/frame_24_delay-0.05s.gif',
            '../Sprites/Zombie/frame_25_delay-0.05s.gif',
            '../Sprites/Zombie/frame_26_delay-0.05s.gif',
            '../Sprites/Zombie/frame_27_delay-0.05s.gif',
            '../Sprites/Zombie/frame_28_delay-0.05s.gif',
            '../Sprites/Zombie/frame_29_delay-0.05s.gif',
            '../Sprites/Zombie/frame_30_delay-0.05s.gif',
            '../Sprites/Zombie/frame_31_delay-0.05s.gif',
            '../Sprites/Zombie/frame_32_delay-0.05s.gif',
            '../Sprites/Zombie/frame_33_delay-0.05s.gif',
        ]
        const zombies = document.querySelectorAll('.zombie');
        let i = 0;
        function animate(i, images) {
            i++;
            if (i >= images.length) {
                i = 0;
            }
            zombies.forEach((zombie) => {
                zombie.src = images[i];
            });
            if (i <= 33) {
                window.requestAnimationFrame(() => animate(i, images));
            }
        }
        animate(i, this.images);
    }

    run(zombie) {
        zombie.dataset.intervalId = setInterval(() => {

        }, 100);
    }
}