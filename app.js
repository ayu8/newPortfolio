const sections = document.getElementsByClassName('section');
const sectBtns = document.getElementsByClassName('controls-container');
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

    // sections active
    mainSect.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        if (id) {
            //removing selected from other buttons
            sectBtns.forEach((btn) => {
                btn.className.remove('active');
            })
            e.target.className.add('active');

            // hide other sections
            sections.forEach((section) => {
                section.className.remove('active');
            })

            const element = document.getElementById(id);
            element.className.add('active');
        }
    })
}

pageTransitions();