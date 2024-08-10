export function checkInputs() {
    const button = document.querySelector('.recall_form_btn');
    const inputs = document.querySelectorAll('.input_row, .radio_option');

    const allValid = Array.from(inputs).every(elem => {
        if (elem.type === 'radio') {
            const radioGroup = document.querySelectorAll(`input[name="${elem.name}"]`);
            return Array.from(radioGroup).some(radio => radio.checked);
        } else {
            return elem.value !== ''; 
        }
    });

    button.disabled = !allValid;
}