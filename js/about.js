function getAge() {    
    var bd = new Date("September 20, 1989 00:00:00");
    var ageDifMs = Date.now() - bd.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

let age = getAge();

function renderAbout() {
    let aHTML = `
    <h2 class="text-gr">About</h2>
    <div class="flexCenter">
    <p>My name is Peter Hagane. I'm ${age} year old and an Information Systems graduate from the University of Agder with an interest in design and development. Have a look at a few of my projects, and get in touch if you want to have a chat.</p>
    </div>
    `
    var about = document.getElementById("about");
    about.setAttribute("class", "flexColumn");
    about.innerHTML = aHTML;
}

renderAbout();