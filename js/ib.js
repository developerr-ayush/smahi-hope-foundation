window.onscroll = function () {
  scrollFunction();
};
let navigation = document.querySelector(".ib_navbar");
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document;
    navigation.setAttribute(
      "style",
      "position: fixed; top:0; left:0; right:0;"
    );
    navigation.style.boxShadow = "2px 15px 12px rgba(0.5, 0.5, .5, .5)";
    navigation.style.background = "url('../img/nav-img.png')";
    navigation.style.backgroundSize = "cover";
    
  } else {
    navigation.setAttribute("style", "position: fixed; boxShadow:0; top:0px;");
  }

}


// hamburger menu function--------------------------

function myFunction(x) {
  x.classList.toggle("change");
}

// toggle menu =============================
let hamIcon = document.getElementById("ham_icon");
let menuItem = document.getElementById("menu_item");
let spanTag = document.getElementById("span_tag");

hamIcon.addEventListener("click", function () {
  if (menuItem.style.height === "200px") {
    menuItem.style.height = "0";
    menuItem.style.padding = "0";
    spanTag.style.opacity = "1";
  } else {
    menuItem.style.height = "200px";
    menuItem.style.padding = "1rem";
    spanTag.style.opacity = "0";
  }
});

// hide menu if clicking out side of it
window.addEventListener("click", function (e) {
  if (!menuItem.contains(e.target) && !hamIcon.contains(e.target)) {
    menuItem.style.height = "0";
    menuItem.style.padding = "0";
  }
});

