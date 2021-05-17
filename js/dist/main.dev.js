"use strict";

var collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(function (item) {
  return item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});