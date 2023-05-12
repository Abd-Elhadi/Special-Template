// check if there's a color prop in local storage
let mainColor = localStorage.getItem('color-option');

if (mainColor) {
    // if there is, add the color to the body
    document.documentElement.style.setProperty('--main-color', mainColor);

    // remove active class
    document.querySelectorAll('.colors-list li').forEach(color => {
        color.classList.remove('active');
    });

    // add active class
    document.querySelectorAll('.colors-list li').forEach(color => {
        if (color.dataset.color === mainColor) {
            color.classList.add('active');
        }
    })
}

// random background option
let randomBackground = true;

// create a varibale that controls the interval
let theInterval;

// check if there's random background stored on local storage
let backgroundLocalItem = localStorage.getItem('background_option');
if (backgroundLocalItem) {
    if (backgroundLocalItem === 'true') {
        randomBackground = true;
    } else {
        randomBackground = false;
    }

    // remove active class
    let rndom = document.querySelectorAll('.random-backgrounds span');
    rndom.forEach(item => {
        item.classList.remove('active');
    });

    // add active class
    rndom.forEach(item => {
        if (backgroundLocalItem === 'true') {
            document.querySelector('.random-backgrounds .yes').classList.add('active');
        } else {
            document.querySelector('.random-backgrounds .no').classList.add('active');
        }
    })
}

// toggle spin class on incon
let toggleSettings = document.querySelector('.toggle-settings .fa-gear');
toggleSettings.onclick = () => {
    // toggle class fa-spin for rotation on self
    toggleSettings.classList.toggle('fa-spin');

    // toggle class open on main settings box
    document.querySelector('.settings-box').classList.toggle('open');
}

// switch colors
const colorsList = document.querySelectorAll('.colors-list li');
colorsList.forEach(color => {
    color.addEventListener('click', e => {
        // remove active class
        colorsList.forEach(color => {
            color.classList.remove('active');
        });
        let theChosenColor = e.target.dataset.color;

        // set color on root
        document.documentElement.style.setProperty('--main-color', theChosenColor);

        // save color on local storage
        localStorage.setItem('color-option', theChosenColor);

        // add active class to the clicked item
        e.target.classList.add('active');
    });
});

//switch random background option
const backgroundOption = document.querySelectorAll('.random-backgrounds span');
backgroundOption.forEach(background => {
    background.addEventListener('click', e => {
        // remove active class
        backgroundOption.forEach(back => {
            back.classList.remove('active');
        });

        // add active class to the clicked item
        e.target.classList.add('active');

        if (e.target.dataset.background === 'yes') {
            randomBackground = true;
            randomizeImages();
            localStorage.setItem('background_option', true);
        } else {
            randomBackground = false;
            localStorage.setItem('background_option', false)
            clearInterval(theInterval);
        }
    });
});

// select landing page element
let landingPage = document.querySelector('.landing-page');

// get array of images
let imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

// function to randomize images
function randomizeImages() {
    if (randomBackground) {
        // change background image url
        theInterval = setInterval(() => {
            // get random number
            let randomNumber = Math.floor(Math.random() * imagesArray.length);
            landingPage.style.backgroundImage = `url('imgs/${imagesArray[randomNumber]}')`;
        }, 1000);
    }
}


// select skills
let ourSkills = document.querySelector('.skills');
// console.log(ourSkills);
window.onscroll = () => {
    // skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;
    // console.log(skillsOffsetTop)

    // skills outer height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // window height
    let windowHeight = this.innerHeight

    // window scroll top
    let windowScrollTop = this.scrollY;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        // console.log('skills section reached');
        let spans = ourSkills.querySelectorAll('.skill-box .skill-progress span');
        spans.forEach(span => {
            span.style.width = span.dataset.progress;
        });
    }

    if (window.scrollY >= ourSkills.offsetTop - 100) {
        // console.log('skills section');
        // let spans = ourSkills.querySelectorAll('.skill-progress span');
        // spans.forEach(span => {
        //     span.style.width = span.dataset.progress;
        // });
    }
};

// create popup with the image
let ourGallery = document.querySelectorAll('.gallery img');
ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        // create overlay elelent
        let overlay = document.createElement('div');

        // add class to overlay
        overlay.className = 'popup-overlay';

        // append overlay to body
        document.body.appendChild(overlay);

        // create the popup
        let popupBox = document.createElement('div');

        // add popup-box class to popupBox
        popupBox.className = 'popup-box';

        if (img.alt !== null) {
            // create h3 heading for ImgHeading
            let imgHeading = document.createElement('h3');

            // add img alt to imgHeading as text node
            imgHeading.appendChild(document.createTextNode(img.alt));

            // add imgHeading to popupBox
            popupBox.appendChild(imgHeading);
        }

        // create the image
        let popupImg = document.createElement('img');

        // set popupImg src to img src
        popupImg.src = img.src;

        // add popupImg to popupBox
        popupBox.appendChild(popupImg);

        // append the popupBox to the body
        document.body.appendChild(popupBox);

        // create close span
        let close = document.createElement('span');

        // create the close text
        let closeText = document.createTextNode('X');

        // append closeText to close
        close.appendChild(closeText);

        // add close-button class to close
        close.className = 'close-button';

        // add close to popupBox
        popupBox.appendChild(close);
    });
});

// close the popupBox window
document.addEventListener('click', (e) => {
    if (e.target.classList == 'close-button') {
        // remove the current popupBox
        e.target.parentNode.remove();

        // remove the overlay
        document.querySelector('.popup-overlay').remove();
    }
});

// select all bullets elements
let allBullets = document.querySelectorAll('.nav-bullets .bullet');
scrollTo(allBullets);

// select all links
let allLinks = document.querySelectorAll('.links a');
scrollTo(allLinks);

function scrollTo(elements) {
    elements.forEach(element => {
        element.addEventListener('click', e => {

            // prevent default if is a link
            if (e.target.nodeName.toLowerCase() === 'a') {
                e.preventDefault();
            }

            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            });
        })
    })
}