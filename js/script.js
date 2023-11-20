// Get elements from the dom

const profileImg = document.querySelector(".profile-card img");
const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");
const aboutMe = document.querySelector(".about-me");

// Add click event to menu button

menuBtn.addEventListener("click", () => {
  profileImg.classList.toggle("img-expand");
  menuBtn.firstElementChild.classList.toggle("bx-window-close");
  menuBtn.classList.toggle("menu-btn-opened");
  overlay.classList.toggle("overlay-opened");
  aboutMe.classList.toggle("about-me-opened");
});
