export function checkInputs(btnSubmit, inputsClassnames) {
    const button = document.querySelector(btnSubmit);
    const inputs = document.querySelectorAll(inputsClassnames);

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