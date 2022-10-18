function changeTheme() {
  let theme = window.localStorage.getItem("theme");
  if(theme) {
    document.querySelector("#theme").href = `/themes/${theme}.css`;
  }

    document.querySelector("#light").addEventListener('click', function() {
        document.querySelector("#theme").href = "/themes/light.css";
        window.localStorage.setItem("theme","light");
    });
    document.querySelector("#green").addEventListener('click', function() {
        document.querySelector("#theme").href = "/themes/green.css";
        window.localStorage.setItem("theme","green");
    });
    document.querySelector("#dark").addEventListener('click', function() {
        document.querySelector("#theme").href = "/themes/dark.css";
        window.localStorage.setItem("theme","dark");
    });
    
}
changeTheme();

// change header from fixed to block
var prevScrollpos = window.pageYOffset;
if (window.innerWidth > 700) {
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  document.querySelector("header").style.top = "0";
} else {
  document.querySelector("header").style.top = "-100px";
}
prevScrollpos = currentScrollPos;
} 
}

// rotate hamburger menu
document.querySelector(".ham-btn").addEventListener("click", function() {
  document.querySelector(".bar-1").classList.toggle("active");
  document.querySelector(".bar-2").classList.toggle("active");
  document.querySelector(".bar-3").classList.toggle("active");
  document.querySelector(".nav-mobile").classList.toggle("active")
});

// hide navbar after click
let navItems = document.getElementsByClassName("nav-mobile-item");
for(let i=0;i<navItems.length;i++) {
  navItems[i].addEventListener("click", function(){
    document.querySelector(".nav-mobile").classList.remove("active");
    document.querySelector(".bar-1").classList.toggle("active");
    document.querySelector(".bar-2").classList.toggle("active");
    document.querySelector(".bar-3").classList.toggle("active");
  })
}





