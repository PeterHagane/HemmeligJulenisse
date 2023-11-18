var splashHTML = `
<div class="flexColumn"> 
<img id="splashlogo" src="img/logo.svg">
    <h4>
    Design & Development
    </h4>
    <div class="flexRow">
    <ul id="splashmenu" class="splashmenu">
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
    </ul>
    </div>
</div> 

`

    // <img id="splashlogo" src="img/logo.svg">

var setSplash = function setSplash(){
    var splash = document.getElementById("splash");
    splash.setAttribute("class", "flexColumn text-gr");
    splash.innerHTML = splashHTML;
}
setSplash();

//<h4>By</h4><h1>PETER HAGANE</h1></div><div class="flexRow">