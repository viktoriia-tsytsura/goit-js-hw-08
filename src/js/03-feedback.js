import throttle from 'lodash.throttle';
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);
populateInput();

function onInput(evt) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
        email: form.elements.email.value,
        message: form.elements.message.value,
    }));   
}

function onSubmit(evt) {
    evt.preventDefault();
    
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

   
}

function populateInput() {
    const savedInput = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedInput) {
        form.elements.email.value = savedInput.email;
         form.elements.message.value = savedInput.message;
    }

}