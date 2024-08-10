export function slideSwiper() {
    const cardsCollection = document.querySelectorAll('.mobile_employer_card');

    let counter = 0;

    let initY = 0;
    let posY1 = 0;
    let posY2 = 0;

    let initX = 0;
    let posX1 = 0; 
    let posX2 = 0;
    let currentPos = 0;

    let isHorizontalSwipe = false;

    cardsCollection.forEach(card => {

        card.ontouchstart = (ev) => {
            initX = ev.touches[0].clientX;
            initY = ev.touches[0].clientY;
            currentPos = parseInt(getComputedStyle(card).transform.split(',')[4]) || 0;
        }
        
        card.ontouchmove = (ev) => {
            posX1 = ev.touches[0].clientX;
            posY1 = ev.touches[0].clientY;

            posX2 = posX1 - initX;
            posY2 = posY1 - initY;

            if (Math.abs(posX2) > Math.abs(posY2)) {
                isHorizontalSwipe = true;
                posX2 < 0 ? card.style.transform = `translateX(calc(${currentPos}px - 60px))` : card.style.transform = `translateX(calc(${currentPos}px + 60px)`
                ev.preventDefault(); 
            }
            else {
                isHorizontalSwipe = false;
            }
        }

        card.ontouchend = (ev) => {

            if (posX2 < -59) {
                counter++;
                
                cardsCollection.forEach(card => 
                    card.style.transform = `translateX(calc(-100% * ${counter}))`
                )
                
            }

            else if (posX2 > 59) {
                counter--;

                cardsCollection.forEach(card => 
                    card.style.transform = `translateX(calc(-100% * ${counter}))`
                )
                
            }

            else {
                cardsCollection.forEach(card => 
                    card.style.transform = `translateX(calc(-100% * ${counter}))`
                )
            }

            initX = 0;
            posX1 = 0;
            posX2 = 0;
            initY = 0;
            posY1 = 0;
            posY2 = 0;
            currentPos = 0;
            isHorizontalSwipe = false;
        }

    })  
}