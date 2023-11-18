function getAge() {    
    var bd = new Date("September 20, 1989 00:00:00");
    var ageDifMs = Date.now() - bd.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

let age = getAge();

function renderAbout() {
    let aHTML = `
<div></div>
    `
    var about = document.getElementById("about");
    about.setAttribute("class", "flexColumn");
    about.innerHTML = aHTML;
}

renderAbout();