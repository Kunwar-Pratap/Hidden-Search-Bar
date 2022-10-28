const searchDock = document.querySelector(".search-dock");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    searchDock.classList.toggle('active'), input.focus();
});