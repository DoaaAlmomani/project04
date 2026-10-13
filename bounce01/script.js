// ===== Theme switcher =====
// 1. Select the elements we need from the DOM
const themeButton = document.getElementById("theme-toggle");
const root = document.documentElement; // the <html> element

// 2. Callback function: runs every time the button is clicked
function toggleTheme() {
  const currentTheme = root.getAttribute("data-theme");

  if (currentTheme === "dark") {
    root.setAttribute("data-theme", "light");
    themeButton.textContent = "Dark mode";
  } else {
    root.setAttribute("data-theme", "dark");
    themeButton.textContent = "Light mode";
  }
}

// 3. Attach the event listener: user click -> event fires -> toggleTheme runs
themeButton.addEventListener("click", toggleTheme);

// ===== Contact form =====
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

function handleSubmit(event) {
  event.preventDefault(); // stop the page from reloading
  const name = document.getElementById("name").value;
  formStatus.textContent = "Thank you, " + name + ". Your message was received.";
  contactForm.reset();
}

contactForm.addEventListener("submit", handleSubmit);

// ===== Bounce 01: Profile photo switcher =====
const profilePhoto = document.getElementById("profile-photo");
const photoButtons = document.querySelectorAll(".photo-btn");

// The data lives in an object, separate from the logic
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

// Fade the photo back in once the new image has loaded (or failed to load)
function showPhoto() {
  profilePhoto.classList.remove("fade-out");
}

function switchPhoto(event) {
  const clickedButton = event.currentTarget;
  const selected = photos[clickedButton.dataset.photo];

  // Do nothing if this photo is already displayed
  if (profilePhoto.getAttribute("src") === selected.src) {
    return;
  }

  // Update the active button
  photoButtons.forEach(function (button) {
    const isActive = button === clickedButton;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive);
  });

  // 1) fade out (CSS transition, 0.3s)  2) swap src and alt  3) fade in
  profilePhoto.classList.add("fade-out");
  setTimeout(function () {
    profilePhoto.src = selected.src;
    profilePhoto.alt = selected.alt;
  }, 300);
}

profilePhoto.addEventListener("load", showPhoto);
profilePhoto.addEventListener("error", showPhoto);

photoButtons.forEach(function (button) {
  button.addEventListener("click", switchPhoto);
});
