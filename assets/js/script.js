const genColor = document.querySelector(".gen-color");
const profilePic = document.getElementById("profile-pic");
const upload = document.getElementById("upload");
const hexCode = document.getElementById("hex");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// navbar
const navbar = document.querySelector('.navbar');

const historyTab = document.querySelector('.history-toggle');
const historyItems = document.querySelector('.history-items');

const favoritesTab = document.querySelector('.favorites-toggle');
const favoritesItems = document.querySelector('.favorites-items');

historyTab.addEventListener('mouseover', () => {
    historyItems.style.display = 'flex';
});

navbar.addEventListener('mouseout', () => {
    historyItems.style.display = 'none';
});

favoritesTab.addEventListener('mouseover', () => {
    favoritesItems.style.display = 'flex';
});
  
navbar.addEventListener('mouseout', () => {
    favoritesItems.style.display = 'none';
});


// uploads image
upload.addEventListener('change', () => {
    profilePic.src = URL.createObjectURL(upload.files[0]);
    // Hides upload btn if img is uploaded, hides generate w/o img
    if (upload.files && upload.files[0]) {
        const uploadBtn = document.getElementById("upload-btn");
        uploadBtn.style.display = "none";
        genColor.classList.remove("hide");
    } else {
        uploadBtn.style.display = "block";
        genColor.classList.add("hide");
    }
});

// generates random hex on click
genColor.addEventListener('click', () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[getRandomNumber()];
    }
    hexCode.innerHTML = color;
    document.querySelector(".bg-color").style.backgroundColor = color;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
