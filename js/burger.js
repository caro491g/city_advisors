window.addEventListener("load", sidenVises);
let btn;
let menu;

function sidenVises() {
  btn = document.querySelector("#container");
  menu = document.querySelector(".main-menu");

  btn.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  menu.classList.toggle("shown");
  const menuShown = menu.classList.contains("shown");

  btn.classList.toggle("change");

  if (menuShown) {
    console.log(menuShown);
  } else {
    console.log(menuShown);
  }
}
