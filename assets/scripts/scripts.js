//Menu mobile

const btnMobile = document.getElementById("btn-mobile");

function toogleMenu(event) {
  if (event.type === "touchstart") event.preventDefault()
  const nav = document.getElementById("nav");
  nav.classList.toggle("active")
}

btnMobile.addEventListener("click", toogleMenu);
btnMobile.addEventListener("touchstart", toogleMenu);
