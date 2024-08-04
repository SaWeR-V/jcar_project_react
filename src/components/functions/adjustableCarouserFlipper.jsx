export function adjustableCarouselFlipper(multiplier, gap, backBtnCSSSelector, nextBtnCSSSelector, cardCSSSelector) {
    let counter = 0;

    const back = document.querySelector(backBtnCSSSelector);
    const next = document.querySelector(nextBtnCSSSelector);
    const cardCollection = document.querySelectorAll(cardCSSSelector);

    let totalSteps = Math.floor(cardCollection.length / multiplier);
    const remains = cardCollection.length % multiplier;
    let totalShowedCards = 0;

    if (remains === 0) {
        totalSteps = totalSteps - 1
    }

    isStartOrEnd();

    // if (back) {
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
    // }
    // if (next) {

    
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
    // }

    function isStartOrEnd() {
        // if (back && next) {
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
        // }
    }

    if (window.outerWidth <= 768) {
        cardCollection.forEach(card => {
            card.ondragstart = () => console.log("drag_started")
            // card.style.transform = `translateX(calc((-100%  * ${(counter - 1) * multiplier} - ${remains * 100}%) - ${gap * totalShowedCards}px`
        })
    }
}