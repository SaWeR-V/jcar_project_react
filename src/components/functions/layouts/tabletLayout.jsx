export function tabletLayout() {
    const phones = document.querySelector('.contacts_block');
    const headerMenus = document.querySelector('.header_links');
    const headerContainer = document.querySelector('.header_container');

    if (phones && headerMenus && headerContainer) {
        phones.remove();
        headerMenus.remove();

        headerContainer.insertAdjacentHTML('beforeend', `
                <div class="burger_menu">
                    <div class="burger_menu_top"></div>
                    <div class="burger_menu_middle"></div>
                    <div class="burger_menu_bottom"></div>
                </div>
            `)
    }

    // const aboutUsBlock = document.querySelector('.who_are_we');
    // const aboutUsTxt = document.querySelectorAll('.who_are_we_paragraph');

    // for (let i = 0; i < aboutUsTxt.length; i++) {
    //     aboutUsBlock.insertAdjacentHTML('beforeend', `
    //             <button id=${i}></button>
    //         `)

    // }
    
}