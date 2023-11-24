let buttons = document.querySelectorAll('.button__notify');

let images = ['public/assets/notifyDefault.svg', 'public/assets/notifyOn.svg', 'public/assets/notifyOff.svg'];

let index = 1;

buttons.forEach((button) => button.addEventListener('click', () => {
    let img = button.querySelector('img');

    // Изменяем путь к изображению
    img.src = images[index];

    // Обновляем индекс
    index = (index + 1) % images.length;
}));
