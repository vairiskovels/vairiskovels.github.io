const themeBulbs = document.getElementsByClassName("bulb");
const sections = document.getElementsByClassName("card-section");
const navItems = document.getElementsByClassName("nav-item-text");
const cards = document.getElementsByClassName("card");
const cardText = document.getElementsByClassName("info");
const cardBtns = document.getElementsByClassName("btn-card");
const roundBtns = document.getElementsByClassName("btn-round");

const themeBtn = document.getElementById("theme-toggle-btn");
const overlay = document.getElementById("index-header-overlay");
const gradient = document.getElementById("index-header-gradient");
const headerH3 = document.getElementById("header-h3");
const headerH1 = document.getElementById("header-h1");
const btnRound = document.getElementById("btn-round");
let darkTheme = 1;

function changeButtonBulbs(theme) {
    if (theme == 1) {
        themeBulbs[0].className = "fa-regular fa-lightbulb bulb hide";
        themeBulbs[1].className = "fa-solid fa-lightbulb bulb show";
    } else {
        themeBulbs[0].className = "fa-regular fa-lightbulb bulb show";
        themeBulbs[1].className = "fa-solid fa-lightbulb bulb hide";
    }
}

function changeElementTheme() {

    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.toggle('light-theme');
    }
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.toggle('light-theme');
    }
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('light-theme');
    }
    for (let i = 0; i < cardText.length; i++) {
        cardText[i].classList.toggle('light-theme');
    }
    for (let i = 0; i < cardBtns.length; i++) {
        cardBtns[i].classList.toggle('light-theme');
    }
    for (let i = 0; i < roundBtns.length; i++) {
        roundBtns[i].classList.toggle('light-theme');
    }
    overlay.classList.toggle('light-theme');
    gradient.classList.toggle('light-theme');
    headerH3.classList.toggle('light-theme');
    headerH1.classList.toggle('light-theme');
    btnRound.classList.toggle('light-theme');
    document.body.classList.toggle('light-theme');

}

themeBtn.addEventListener("click", () => {
    if (darkTheme == 1) {
        darkTheme = 0;
        changeButtonBulbs(1);
        changeElementTheme();
    } else {
        darkTheme = 1;
        changeButtonBulbs(0);
        changeElementTheme();
    }
});

themeBtn.addEventListener("mouseover", () => {
    themeBtn.children[0].style.color = "#fff";
    themeBtn.children[1].style.color = "#fff";
});
themeBtn.addEventListener("mouseout", () => {
    themeBtn.children[0].style.color = "#ff715b";
    themeBtn.children[1].style.color = "#ff715b";
});