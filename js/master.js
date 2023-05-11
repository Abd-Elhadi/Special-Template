// toggle spin class on incon
let toggleSettings = document.querySelector('.toggle-settings .fa-gear');
toggleSettings.onclick = () => {
    // toggle class fa-spin for rotation on self
    toggleSettings.classList.toggle('fa-spin');

    // toggle class open on main settings box
    document.querySelector('.settings-box').classList.toggle('open');
}


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