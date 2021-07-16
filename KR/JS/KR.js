/* Enforce HTTPS */
if (window.location.protocol === "http:") {
    window.location.href = window.location.href.replace(window.location.protocol,"https:");
 }   

/* Responsive menu function */
function Condense() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive animate_animated animate_slideInDown";
    } else {
        x.className = "topnav";
    }
}

/* On-scroll functions */
window.onscroll = function() {
    menuAppearance()
};

/*
function menuAppearance() {
    if (document.documentElement.scrollTop > 150) {
        document.getElementById("myTopnav").className = "topnav";
    }
}
*/

/* Fixed Menu Settings */
function fixedMenu(x) {
    x.classList.toggle("change");
    document.getElementById("FM1").className = "sidenav animate_animated animate_fadeInLeft";
}

/* W3 Menu */
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-red";
  }
  document.getElementById("myLink").click();

  /* KR Menu */
  function openKRMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("kr-new-menu");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("kr-tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" kr-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " kr-red";
  }
  document.getElementById("krLink").click();


  /* Slide-Show text */
  var myIndex = 0;
    carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    
    
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4500);
    
}
