let darkTheme = 1;
const themeBulbs = document.getElementsByClassName("bulb");
const themeBtn = document.getElementById("theme-toggle-btn");
const headerText = document.getElementById("information-header-text");
const infoText = document.getElementsByClassName("text-section");
const iamageText = document.getElementsByClassName("image-text");
const highlightText = document.getElementsByClassName("text-highlight");

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
    document.body.classList.toggle('light-theme');
    headerText.classList.toggle('light-theme');
    for (let i = 0; i < infoText.length; i++) {
        infoText[i].classList.toggle('light-theme');
    }
    for (let i = 0; i < iamageText.length; i++) {
        iamageText[i].classList.toggle('light-theme');
    }
    for (let i = 0; i < highlightText.length; i++) {
        highlightText[i].classList.toggle('light-theme');
    }
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