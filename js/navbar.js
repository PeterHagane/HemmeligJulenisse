var html = `
<div class="navbarleft">
    <a onclick=toggleBackgroundAnimation()>❄️</a>
      <div>

      </div>
      <div class="flexfill">
      </div>
      <div class="menu-btn">
          <div class="menu-btn__burger"></div>
      </div>
      </div>


      <div class="navbarright">
      <ul class="menu">
      <li><span class="uk-form-icon" uk-icon="icon: user"></span></li>
  </ul>
</div>
`
var navbarcontainer = document.getElementById("navbarcontainer");

var setNavBar = function setNavBar(){
    // var navbarcontainer = document.getElementById("navbarcontainer");
    navbarcontainer.setAttribute("class", "navbarcontainer hidden");
    navbarcontainer.innerHTML = html;
}
setNavBar();

const menuBtn = document.querySelector(".menu-btn");
const navRight = document.querySelector(".navbarright");
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    navRight.classList.toggle("open"); 
    navRight.classList.add("ease-out");
});

//handle hide/show on scroll
var splash = document.getElementById("splash");
var projects = document.getElementById("projects");
var splashmenu = document.getElementById("splashmenu");
// The element we will observe
const scrollelement = document.getElementById("scrollelement");

var unscrolled = function(){
    // navbarcontainer.classList.add("hidden");
    // projects.classList.remove("slideIn");
    // splashmenu.classList.add("hidden");
    navbarcontainer.classList.add("hidden");
    // splash.classList.toggle("short");
    // splash.classList.toggle("fullheight");
    // splash.target.style.display = "none";
  console.log("unscrolled");
  document.addEventListener("wheel", onWheel,{ passive: false });
}
var scrolled = function(){
    // console.log("Scrolling down - show navbar, show projects, hide menu, reduce height of splash");
    navbarcontainer.classList.remove("hidden");
    console.log("scrolled");
    document.removeEventListener("wheel", onWheel,{ passive: false });
    // splash.classList.add("short");
}

// document.addEventListener("wheel", onWheel,{ passive: false });

function onWheel(e){
  e.deltaY > 0 && navbarcontainer.classList.remove("hidden");
  e.deltaY < 0 && navbarcontainer.classList.add("hidden");
  // console.log(e)
}

// Observer options.
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
};

// Callback function executed during observe.
const callback = function( entries, observer ) {
  // Target the first entry available.
  let observedelement = entries[0];

  // Log observer entry data.
  // console.log(observedelement);

  // Add or remove the blur.
  observedelement.isIntersecting ? unscrolled() : scrolled();
};

const observer = new IntersectionObserver( callback, options );

//observe if element is present
if ( scrollelement ) {
  observer.observe( scrollelement );
}

//https://www.youtube.com/watch?v=huVJW23JHKQ