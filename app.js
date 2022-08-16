const sections = document.getElementsByClassName('sections');
const sectBts = document.getElementsByClassName('controls-container');
const sectBtn = document.getElementsByClassName('controls');

const mainSect = document.getElementById('main');


function pageTransitions() {
    // getting rid of all sections which are not active

    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.getElementsByClassName('active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}

pageTransitions();