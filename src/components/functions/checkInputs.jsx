export function checkInputs(btnSubmit, inputsClassnames) {
    const button = document.querySelector(btnSubmit);
    const inputs = document.querySelectorAll(inputsClassnames);
    const inputOtherCity = document.querySelector('.input_row_other_city');
    let inputsValid = true;
    let radioValid = false;

 
    inputs.forEach(elem => {
        if (elem.id === 'radioOther' && elem.checked) {
            inputOtherCity.disabled = false;
            inputOtherCity.classList.remove('invisible');
        } else if (elem.id !== 'radioOther' && elem.type === 'radio' && elem.checked) {
            inputOtherCity.classList.add('invisible');
            inputOtherCity.disabled = true;
            inputOtherCity.value = ''; 
        }

        
        if (elem.classList.contains('input_row') && !elem.classList.contains('invisible')) {
            if (elem.value === '') {
                inputsValid = false;
            }
        }
    });
   
    inputs.forEach(elem => {
        if (elem.type === 'radio' && elem.checked) {
            radioValid = true;
        }
    });

    if (inputsValid && radioValid) {
        button.disabled = false;
    } 
    else {
        button.disabled = true;
    }

}