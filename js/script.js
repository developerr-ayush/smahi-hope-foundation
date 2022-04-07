

// hamburger menu--------------------------

function myFunction(x) {
  x.classList.toggle("change");
}



// window on scroll function  for sticky navbar----

window.onscroll = function () {
  scrollFunction();
};


let nav = document.getElementById("navbar")

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    nav.setAttribute("style", "position: fixed; top:0; left:0; right:0;");
    nav.style.boxShadow = "0 5px 20px 0 rgba(0, 0, 0, .2)";
    nav.style.backgroundColor = "#121212";
  } else {
   
      nav.setAttribute("style", "position: fixed; boxShadow:0; top:0px");
  }
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



  // form reset function

  // function myFunction() {
  //   document.getElementById("myForm").reset();
  // }

  // <!-- navigation starts from here -->
 
  //   <nav class="flex_box" id="ib_navbar">
  //     <!-- logo -->
  //     <div class="logo flex_box">
  //       <a href="home"> <img src="img/logo.png" alt="logo-img" /></a>
  //     </div>

  //      <span class="span">Evernote Blog</span>
   
  //     <!-- hamburger icon -->
  //     <div class="container" id="ham_icon" onclick="myFunction(this)">
  //       <div class="bar1"></div>
  //       <div class="bar2"></div>
  //       <div class="bar3"></div>
  //     </div>
  //   </nav>