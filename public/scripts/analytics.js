const chips = document.querySelectorAll('.chip__frame');

chips.forEach((chip) => chip.addEventListener('click', () => {
    chips.forEach((otherChip) => {
        if(otherChip === chip) {
            chip.classList.add('active__chip');
        } else {
            otherChip.classList.remove('active__chip');
        }
    })
}));

function errorHandler() {
    window.location.href = "error.html";
}

window.onbeforeunload = errorHandler;