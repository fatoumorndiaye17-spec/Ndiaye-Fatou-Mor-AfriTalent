// DARK MODE + LOCALSTORAGE
const darkToggle = document.getElementById("darkToggle");

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
}

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


// NAVBAR SCROLL
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// BOUTON RETOUR EN HAUT
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if(window.scrollY > 200){
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});