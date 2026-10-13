// ===== Profile photo switcher =====
const profilePhoto = document.getElementById("profile-photo");
const photoButtons = document.querySelectorAll(".photo-btn");

const photos = {
  casual: {
    src: "assets/casual.jpg",
    alt: "Duaa Almomani, casual photo"
  },
  professional: {
    src: "assets/professional.jpg",
    alt: "Duaa Almomani, professional photo"
  }
};

let currentStyle = "casual"; // which photo is displayed now
let isSwitching = false;     // true while a switch is in progress

// Fade the photo back in once the new image has loaded (or failed to load)
function showPhoto() {
  profilePhoto.classList.remove("fade-out");
  isSwitching = false;
}

// Callback: runs every time a button is clicked
function switchPhoto(event) {
  const clickedButton = event.currentTarget;
  const style = clickedButton.dataset.photo;

  // Ignore the click if this photo is already shown or a switch is running
  if (isSwitching || style === currentStyle) {
    return;
  }

  isSwitching = true;
  currentStyle = style;

  // Highlight the clicked button
  photoButtons.forEach(function (button) {
    const isActive = button === clickedButton;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive);
  });

  // 1) fade out (CSS transition, 0.3s)  2) swap src and alt  3) fade in on "load"
  profilePhoto.classList.add("fade-out");
  setTimeout(function () {
    profilePhoto.src = photos[style].src;
    profilePhoto.alt = photos[style].alt;
  }, 300);
}

profilePhoto.addEventListener("load", showPhoto);
profilePhoto.addEventListener("error", showPhoto);

photoButtons.forEach(function (button) {
  button.addEventListener("click", switchPhoto);
});
