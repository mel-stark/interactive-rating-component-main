const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        event.target.classList.add('active');
    });
});