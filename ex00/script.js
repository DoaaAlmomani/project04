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
