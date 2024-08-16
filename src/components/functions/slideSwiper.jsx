export function slideSwiper(cards, buttons) {
    const cardsCollection = document.querySelectorAll(cards);
    const cardsButtons = document.querySelectorAll(buttons);

    let counter = 0;

    let initY = 0;
    let posY1 = 0;
    let posY2 = 0;

    let initX = 0;
    let posX1 = 0; 
    let posX2 = 0;
    let currentPos = 0;

    let isHorizontalSwipe = false;

    controlPositionCheck();
    additionalCardsControls();

    cardsCollection.forEach((card, index) => {

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
                if (ev.cancelable) ev.preventDefault();
            }
            else {
                isHorizontalSwipe = false;
            }
        }

        card.ontouchend = (ev) => {

            if (posX2 < -59 && counter !== cardsCollection.length - 1) {
                counter++;
                
                cardsCollection.forEach(card => 
                    card.style.transform = `translateX(calc(-100% * ${counter}))`
                )
                controlPositionCheck();
            }

            else if (posX2 > 59 && counter !== 0) {
                counter--;

                cardsCollection.forEach(card => 
                    card.style.transform = `translateX(calc(-100% * ${counter}))`
                )
                controlPositionCheck();
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

    function controlPositionCheck() {
        cardsButtons.forEach(btn => {
            if (counter === +btn.id) {
                btn.classList.add('card_control_btn_active')
            }
            else {
                btn.classList.remove('card_control_btn_active')
            }
        })
    }

    function additionalCardsControls() {
        cardsButtons.forEach(btn => {
            btn.onclick = () => {
                counter = +btn.id;
                cardsCollection.forEach(card => {
                    card.style.transform = `translateX(calc(-100% * ${counter}))`
                })

                controlPositionCheck();
            }
        })
    }

}