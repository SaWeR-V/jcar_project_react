export function employersCarouselFlipper() {
    let counter = 0;   
    const cardsCollection = document.querySelectorAll('.employer_card');
    const cardsIndicators = document.querySelectorAll('.card_position_btn');
    const employerInfo = document.querySelectorAll('.employer_info');

    const back = document.querySelector('button.back');
    const next = document.querySelector('button.next');

    if (back && next && cardsCollection && cardsIndicators) {
        isStartOrEnd();
        checkMarker();

        cardsCollection.forEach(card => {
            card.ondrag = () => `translateX(calc(-100% * ${counter})`;
        });


        back.onclick = () => {
            if (counter !== 0) {
                counter--;
                cardsCollection.forEach(card => {
                    card.style.transform = `translateX(calc(-100% * ${counter})`;
                });

                checkMarker();
                isStartOrEnd()
            }
            else return;

        }
        next.onclick = () => {
            if (counter < cardsCollection.length - 1) {
                counter++;
                cardsCollection.forEach(card => {
                    card.style.transform = `translateX(calc(-100% * ${counter})`;
                })

                checkMarker();
                isStartOrEnd()
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

        cardsIndicators.forEach(elem => {
            elem.onclick = () => {
                if (counter === +elem.id) return;
                
                counter = +elem.id;
                cardsCollection.forEach(card => {
                    card.style.transform = `translateX(calc(-100% * ${counter})`;
                });
       
                checkMarker();
            }
        })
        
    }

    function isStartOrEnd() {
        if (counter === 0) {
            back.classList.add('hidden')
        } 
        else {
            back.classList.remove('hidden')
        }

        if (counter === cardsCollection.length - 1) {
            next.classList.add('hidden')
        } 
        else {
            next.classList.remove('hidden')
        }
}
}