// check if there's a colo prop in local storage
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
    })
})

// select landing page element
let landingPage = document.querySelector('.landing-page');

// get array of images
let imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

// change background image url
setInterval(() => {
    // get random number
    let randomNumber = Math.floor(Math.random() * imagesArray.length);
    landingPage.style.backgroundImage = `url('imgs/${imagesArray[randomNumber]}')`;
}, 10000);