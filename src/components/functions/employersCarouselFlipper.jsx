export function employersCarouselFlipper() {
    let counter = 0;   
    const cardsCollection = document.querySelectorAll('.employer_card');
    const cardsIndicators = document.querySelectorAll('.card_position_btn');
    const employerInfo = document.querySelectorAll('.employer_info');

    const back = document.querySelector('button.back');
    const next = document.querySelector('button.next');

    if (back && next && cardsCollection && cardsIndicators) {
        checkMarker();

        cardsCollection.forEach(card => {
            card.ondrag = () => `translateX(calc(-100% * ${counter} - 25px * ${counter}))`;
        });


        back.onclick = () => {
            if (counter !== 0) {
                counter--;
                cardsCollection.forEach(card => {
                    card.style.transform = `translateX(calc(-100% * ${counter} - 25px * ${counter}))`;
                });

                addFadeIn();
                checkMarker();
            }
            else return;

        }
        next.onclick = () => {
            if (counter < cardsCollection.length - 1) {
                counter++;
                cardsCollection.forEach(card => {
                    card.style.transform = `translateX(calc(-100% * ${counter} - 25px * ${counter}))`;
                })

                addFadeIn();
                checkMarker();
            } 
            else return;
                
        }
    
        function checkMarker() {
            cardsIndicators.forEach(elem => {
                if (+elem.id === counter) {
                    elem.classList.add('current_card')
                }
                else elem.classList.remove('current_card')
            })
        }

        function addFadeIn() {
            employerInfo.forEach(elem => {
                elem.classList.add('fade-in');
                setTimeout(() => elem.classList.remove('fade-in'), 500);
            })
        }


        cardsIndicators.forEach(elem => {
            elem.onclick = () => {
                if (counter === +elem.id) return;
                
                counter = +elem.id;
                cardsCollection.forEach(card => {
                    card.style.transform = `translateX(calc(-100% * ${counter} - 25px * ${counter}))`;
                });
                addFadeIn();
                checkMarker();
            }
        })
        
    }
}