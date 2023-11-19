function getYear() {    
    var d = new Date
    return d.getFullYear() 
}

var splashHTML = `
<div class="flexColumn splashIntro flexCenter"> 
    <img/>
    <h2 class="text-gr">
    Hemmelig Julefisk ${getYear()}
    </h2>
    <div class="flexRow">
    <ul id="splashmenu" class="splashmenu">
    <li><a href="#about" onclick="renderStart()">Påmelding</a></li>
    </ul>
    </div>
</div> 

`

    // <img id="splashlogo" src="img/logo.svg">

var setSplash = function setSplash(html){
    var splash = document.getElementById("splash");
    splash.setAttribute("class", "flexColumn flexCenter visible");
    splash.innerHTML = html;
}
setSplash(splashHTML);

async function derenderSplash(){
    
    var splash = document.getElementById("splash");
    splash.classList.add("hidden")
    await delay(500);
    splash.classList.remove("hidden")
    splash.innerHTML = "";
    splash.classList.add("visible")
    return true
};

async function renderStart() {
    await derenderSplash().then(() => {
        start = `
        <div class="flexColumn splashIntro flexCenter">
        <h3>Hvem er du?</h3>
            <form>
                <div class="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon">🐟</span>
                        <input id="username" placeholder="Navn" class="uk-input" type="text" aria-label="Username">
                    </div>
                </div>

                <div class="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon">🔒</span>
                        <input id="password" placeholder="Passord" class="uk-input" type="text" aria-label="Password">
                    </div>
                </div>
                <input type="submit" value="Logg inn" onclick="logIn()">

                <input type="submit" value="Registrer" onclick="logIn()">
            </form>
            
            
        <h3>Lag en ny event</h3>
            <form>
                <div class="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: user"></span>
                        <input placeholder="" class="uk-input" type="text" aria-label="Not clickable icon">
                    </div>
                </div>
                
                <div class="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                        <input class="uk-input" type="text" aria-label="Not clickable icon">
                    </div>
                </div>
            </form>
            </div>
        `
        setSplash(start)
    })
}

function logIn(){
    // console.log("asd")
    saveUser()
}

//<h4>By</h4><h1>PETER HAGANE</h1></div><div class="flexRow">