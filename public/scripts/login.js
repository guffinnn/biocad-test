const emailInput = document.querySelector('#input1'),
      passwordInput = document.querySelector('#input2'),
      form = document.querySelector('form');

const handleSubmit = (event) => {
    event.preventDefault();
    let email = emailInput.value,
        password = passwordInput.value;

    fetch('https://64e5fa4809e64530d17f5f7a.mockapi.io/api/db/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then(function(response) {
            if (response.ok) {
                alert("Данные успешно сохранены!");
            } else {
                alert('Ошибка сохранения данных');
            }
        });
};

form.addEventListener('submit', (e) => {
    handleSubmit(e);
});