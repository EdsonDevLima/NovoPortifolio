const menuIcon = document.querySelector(".menulinks img");
const menu = document.querySelector(".menulinks");

menuIcon.addEventListener("click", () => {
  if (menu.style.left == "0px") {
    menu.style.left = "-250px";
    menuIcon.style.right = "-60px";
  } else {
    menu.style.left = "0px";
    menuIcon.style.right = "10px";
  }
});
