const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

yesButton.addEventListener('click', () => {
    console.log('yes');
    question.textContent = "I love you too!";
});

noButton.addEventListener('mouseenter', () => {
    wrapper.style.position = 'relative';
    noButton.style.position = 'absolute';
    const maxX = wrapper.clientWidth - noButton.clientWidth;
    const maxY = wrapper.clientHeight - noButton.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

noButton.addEventListener('mouseleave', () => {
    noButton.style.display = 'inline-block'; // Or 'block' depending on your styling
});