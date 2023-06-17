"use strict";

let nav = this.document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("active", this.window.scrollY > 200);
});

let back_project_btn = document.querySelector(".back_project_btn");
let bookmark_btn = document.querySelector(".bookmark_btn");
let overlay = document.querySelector(".overlay");
let modal_con = document.querySelector(".modal_con");
let back_project_modal_closer = document.querySelector(".model_closer");
let thanks_modal = document.querySelector(".thanks_modal");
let links = document.querySelector(".links");
let all_a = document.querySelectorAll(".links a");
let select_box = document.querySelectorAll(".select_box");
let continue_btn = document.querySelectorAll(".continue_btn");
let thanks_btn = document.querySelector(".thanks_remove");
let menu_btns = document.querySelector(".menu_btns");

// ALL ANCHOR TAGS FUNCTION
all_a.forEach((i) => {
  i.addEventListener("click", function () {
    menu_btns.classList.remove("active");
    overlay.classList.remove("active");
    links.classList.remove("active");
    window.scrollY < 200 && nav.classList.remove("active");
  });
});

// MENU BTN FUNCTION
menu_btns.addEventListener("click", function () {
  menu_btns.classList.toggle("active");
  overlay.classList.toggle("active");
  links.classList.toggle("active");
  window.scrollY < 200 && nav.classList.toggle("active");
});

// BOOK MARK PAGE BTN FUNCTION
bookmark_btn.addEventListener("click", function () {
  bookmark_btn.classList.toggle("active");
});

// BACK PROJECT MODAL DISPLAY FUNCTION
back_project_btn.addEventListener("click", function () {
  overlay.classList.add("active");
  modal_con.classList.add("active");
  nav.classList.contains("active") || nav.classList.add("active");
});

// BACK PROJECT MODAL CLOSER
back_project_modal_closer.addEventListener("click", function () {
  overlay.classList.remove("active");
  modal_con.classList.remove("active");
  window.scrollY < 200 && nav.classList.remove("active");
});

// SELECT BOX DEFAULT STATE
let default_state = () => {
  select_box.forEach((i) => {
    i.classList.remove("active");
  });
};

// SELECT BOX ONCLICK FUNCTION
select_box.forEach((i) => {
  i.addEventListener("click", function () {
    default_state();
    i.classList.add("active");
  });
});

// OVERLAY FUNCTIONS
overlay.addEventListener("click", function () {
  overlay.classList.remove("active");
  modal_con.classList.remove("active");
  thanks_modal.classList.remove("active");

  menu_btns.classList.remove("active");
  links.classList.remove("active");
});

// COUNTINUE BTN FUNCTION
continue_btn.forEach((i) => {
  i.addEventListener("click", function () {
    modal_con.classList.remove("active");
    thanks_modal.classList.add("active");
  });
});

// THANKS MODAL DISPLAY
thanks_btn.addEventListener("click", function () {
  overlay.classList.remove("active");
  thanks_modal.classList.remove("active");
});
