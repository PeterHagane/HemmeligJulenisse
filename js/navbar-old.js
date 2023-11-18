//deprecated navbar

var html;
var open = false;
var menuItems = `
<ul class="menu">
<li><a href="#About">About</a></li>
<li><a href="#Projects">Projects</a></li>
<li><a href="#Contact">Contact</a></li>
</ul>
`;

var menuButton = `
<div class="menu-btn">
<div class="menu-btn__burger"></div>
</div>
`;

var navBar = `
<flexRow class="flexRow " id="navRow1">
    <flexChild class="flexChild">
        <img src="img/logo.png">
    </flexChild>
    <flexChild class="flexFill">
    </flexChild>
    <flexChild class="flexChild flexCenter">
    ${menuButton}
    </flexChild>
</flexRow>

<flexRow class="flexRow flexCenter" id="navRow2">
    <nav>
        ${menuItems}
    </nav>
</flexRow>
`;

var setNavBar = function setNavBar(){
    var navbarelement = document.getElementById("navBar");
    navbarelement.setAttribute("class", "navBar flexCenter");
    navbarelement.innerHTML = navBar;
}
setNavBar();

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector("navBar");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    mobileNav.classList.toggle("mobile");
    // menu.classList.toggle("menu");    
});

//

function throttle(func, limit){ //for handling resize frequency with js, unused func
    let flag = true;
    return function(){
        if(flag){
            func.apply(this, arguments);
            console.log("Update nav");
            flag = false;
            setTimeout(function(){
                flag = true;
            }, limit);
        }
    }
}

function checkWidth(){ //for handling resize frequency with js, unused func
    var navBar;
    if(window.innerWidth > 1080){
        navBar = bigNav;
        console.log("bignav");
    }else if (window.innerWidth < 1081){
        navBar = smallNav;
        console.log("smallnav");
    }
    return navBar;
}




//inital navbar
// window.onresize = throttle(setNavBar, 250); //set navbar at a max frequency of every 250ms, unused func



//https://www.youtube.com/watch?v=gXkqy0b4M5g