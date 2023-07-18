const genColor = document.querySelector(".gen-color");
const profilePic = document.getElementById("profile-pic");
const upload = document.getElementById("upload");
const hex = document.getElementById("hex");


// uploads image
upload.addEventListener('change', () => {
    profilePic.src = URL.createObjectURL(upload.files[0]);
    // Hides upload btn if img is uploaded, hides generate & hex w/o img
    if (upload.files && upload.files[0]) {
        const uploadBtn = document.getElementById("upload-btn");
        uploadBtn.style.display = "none";
        genColor.classList.remove("hide");
        hex.classList.remove("hide");
    } else {
        uploadBtn.style.display = "block";
        genColor.classList.add("hide");
        hex.classList.add("hide");
    }
});


