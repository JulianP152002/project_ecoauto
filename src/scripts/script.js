document.addEventListener('DOMContentLoaded', () => {


    const mobilebtn = document.querySelector('.btn')
    const mobilmenu = document.querySelector('#menu')

    mobilebtn.addEventListener('click', () => {
        let show = document.querySelector('.show')

        if(show){
            mobilmenu.classList.remove('show')
            mobilmenu.classList.add('menu')
        }else{
            mobilmenu.classList.add('show')
            mobilmenu.classList.remove('menu')
        }
    })



})