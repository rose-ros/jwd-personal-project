// navbar selectors
const navbar = document.querySelector('.navbar');
const historyTab = document.querySelector('.history-tab');
const historyItems = document.querySelector('.history-dropdown');
const favoritesTab = document.querySelector('.favorites-tab');
const favoritesItems = document.querySelector('.favorites-dropdown');
const navToggle = document.querySelector('.navbar-toggle');
const navItems = document.querySelector('.nav-items');
const content = document.querySelector('.content');

// event handlers
const displayBlock = (item) => item.style.display = 'block';
const displayFlex = (item) => item.style.display = 'flex';
const displayNone = (item) => item.style.display = 'none';

// show tabs on mouseover
historyTab.addEventListener('mouseover', () => displayFlex(historyItems));
favoritesTab.addEventListener('mouseover', () => displayFlex(favoritesItems));

// hide tabs on mouseout
navbar.addEventListener('mouseout', () => {
    displayNone(historyItems);
    displayNone(favoritesItems);  
});

// small screen nav toggle
navToggle.addEventListener('click', () => {
    navItems.style.display = navItems.style.display === 'none' ? 'flex' : 'none';
});

// small screen hide nav when mouseover outside content
content.addEventListener('mouseover', () => {
    if (getComputedStyle(navToggle).display === 'block') {
        displayNone(navItems);
    }
});  

// Displays nav items on window resize
function reloadNavItems() {
    if (window.innerWidth > 600) {
        displayFlex(navItems);
    } else {
        displayNone(navItems);
    }
}

window.addEventListener('resize', reloadNavItems);



const upload = document.getElementById("upload");
const profilePic = document.getElementById("profile-pic");
const infoBox = document.querySelector('.info-box');
const genColor = document.querySelector(".gen-color");
const hexCode = document.getElementById("hex");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// uploads image
upload.addEventListener('change', () => {
    profilePic.src = URL.createObjectURL(upload.files[0]);
    const uploadBtn = document.getElementById("upload-btn");
    // Hides upload btn if img is uploaded, hides generate w/o img
    if (upload.files && upload.files[0]) {
        displayNone(uploadBtn);
        displayBlock(genColor);
        displayFlex(infoBox);
    } else {
        displayBlock(uploadBtn);
        displayNone(genColor);
        displayNone(infoBox);
    }
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// generates random hex on click
genColor.addEventListener('click', () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[getRandomNumber()];
    }
    hexCode.innerHTML = color;
    document.querySelector(".bg-color").style.backgroundColor = color;
});