export function clientsCarouselFlipper() {
    let counter = 0;
    let multiplier = 3;
    const gap = 20;

    const back = document.querySelector('.clients_carousel_back_btn_area').querySelector('button');
    const next = document.querySelector('.clients_carousel_next_btn_area').querySelector('button');
    const cardCollection = document.querySelectorAll('.happy_client_card');

    const totalSteps = Math.floor(cardCollection.length / multiplier);
    const remains = cardCollection.length % multiplier;
    let totalShowedCards = 0;

    isStartOrEnd();

    back.onclick = () => {
        if (counter !== 0) {
            counter--;
            if (counter === totalSteps - 1) {
                totalShowedCards -= remains;
            }
            else {
                totalShowedCards -= multiplier;
            }

            cardCollection.forEach(card => {
                card.style.transform = `translateX(calc(-100% * ${counter * multiplier} - (${gap * multiplier}px * ${counter})))`
            })
        }
        else return;

        isStartOrEnd();


        if (counter === 0) {
            totalShowedCards = 0;
        }
    }
    next.onclick = () => {
        if (counter !== totalSteps) {
            counter++;
            totalShowedCards += multiplier;

            cardCollection.forEach(card => {
                card.style.transform = `translateX(calc(-100% * ${counter * multiplier} - (${gap * multiplier}px * ${counter})))`
            })

            if (remains > 0 && totalSteps === counter) {
                totalShowedCards += remains - multiplier;
                cardCollection.forEach(card => {
                    card.style.transform = `translateX(calc((-100%  * ${(counter - 1) * multiplier} - ${remains * 100}%) - ${gap * totalShowedCards}px`
                })
            }

            isStartOrEnd();
        }

        else return;
    }

    function isStartOrEnd() {
        if (counter === 0) {
            back.classList.add('hidden')
        } 
        else {
            back.classList.remove('hidden')
        }

        if (counter === totalSteps) {
            next.classList.add('hidden')
        } 
        else {
            next.classList.remove('hidden')
        }
    }
}