// window on scroll function  for sticky navbar----

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-20px";
  }
}

let nav = document.getElementById("navbar");
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    nav.setAttribute("style", "position: fixed; top:0; left:0; right:0;");
    nav.style.boxShadow = "0 5px 20px 0 rgba(0, 0, 0, .2)";
    nav.style.backgroundColor = "#121212";
  } else {
    document
      .getElementById("navbar")
      .setAttribute("style", "position: fixed; boxShadow:0; top:0px");
  }
}


// hamburger menu function--------------------------

function myFunction(x) {
  x.classList.toggle("change");
}

// toggle menu =============================
let hamIcon = document.getElementById("ham_icon");
let menuItem = document.getElementById("menu_item"); 

  
hamIcon.addEventListener("click", function () {
  if (menuItem.style.height === "300px") {
    menuItem.style.height = "0";
  } else {
    menuItem.style.height = "300px";
  }
});

// hide menu if clicking out side of it
  window.addEventListener("click", function (e) {
    if (!menuItem.contains(e.target) && 
        !hamIcon.contains(e.target)) {
     menuItem.style.height = "0";
    }
  });

// hide menu after clicking links
  menuItem.addEventListener("click", function(){
 this.style.height = "0";
  });
 
// dropdown===
// document.getElementById("pages").addEventListener("click", function(){

//    let dropdown = document.querySelector(".dropdown");

//   if (dropdown.style.height === "128px") {
//     dropdown.style.height = "0";
//      dropdown.style.padding = "0";
//      dropdown.style.marginTop = "0";
     
//   } else {
//        dropdown.style.height = "128px";
//         //  dropdown.style.padding = ".5rem";
//            dropdown.style.marginTop = ".7rem";
//              menuItem.style.height = "auto";     
//   }

//     window.addEventListener("click", function (e) {
//       if (
//         !document.querySelector(".dropdown").contains(e.target) &&
//         !document.getElementById("pages").contains(e.target)
//       ) {
//         document.querySelector(".dropdown").style.height = "0";
//          document.querySelector(".dropdown").style.padding = "0";
//          document.querySelector(".dropdown").style.marginTop = "0";
//       }
//     });
// })

// blog

// document.getElementById("blog").addEventListener("click", function () {
//   let blogLinks = document.querySelector(".blog_links");


//   if (blogLinks.style.height === "80px") {
//     blogLinks.style.height = "0";
//       blogLinks.style.marginTop = "0";
//   } else {
//       blogLinks.style.height = "80px";
//       blogLinks.style.marginTop = ".7rem";
//        menuItem.style.height = "auto";
//   }


//      window.addEventListener("click", function (e) {
//        if (
//          !document.querySelector(".blog_links").contains(e.target) &&
//          !document.getElementById("blog").contains(e.target)
//        ) {
//          document.querySelector(".blog_links").style.height = "0";
//           document.querySelector(".blog_links").style.marginTop = "0";
//        }
//      });
// });


// document.getElementById("event").addEventListener("mouseover", function(){
//   document.querySelectorAll(".btn").style.background = "red";

// });

// let btn = document.querySelectorAll(".btn");

// (for (let i ))

// console.log(btn);