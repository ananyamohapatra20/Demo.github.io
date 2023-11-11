document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('colorButton');

    button.addEventListener('click', function () {
        changeColor();
    });

    function changeColor() {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
