const themeToggle = document.getElementById("theme-toggle");

console.log(themeToggle);

function setTheme(themeName) {
  document.querySelector("html").setAttribute("data-theme", themeName);
}

function toggleTheme(event) {
  if (event.target.checked) {
    setTheme("dark");
  } else {
    setTheme("Light");
  }
}

function setInitialTheme() {
  const preferDarkMode = window.matchMedia(
    "(prefer-color-scheme: dark)"
  ).matches;

  if (preferDarkMode) {
    themeToggle.checked = "true";
    setTheme("dark");
  } else {
    themeToggle.checked = "false";
    setTheme("Light");
  }
}

function showInitialTheme() {
  setInitialTheme();
  themeToggle.addEventListener("change", toggleTheme);
}

document.addEventListener("DOMContentLoaded", showInitialTheme);
