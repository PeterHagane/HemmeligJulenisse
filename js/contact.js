function renderContact() {
    let aHTML = `
    <h2 class="text-gr">Contact</h2>
    <div class="flexCenter">
    <a href="mailto:peterhagane@yahoo.no"><h4>peterhagane@yahoo.no</h4></a>
    <a href=""><h4 onclick="copyURI(event)">Phone: +47 93615145</h4></a>
    <a href="https://www.linkedin.com/in/peter-hagane-53397859/"><h4>LinkedIn</h4></a>
    </div>
    `
    var about = document.getElementById("contact");
    about.setAttribute("class", "flexColumn flexCenter");
    about.innerHTML = aHTML;
}

renderContact();

function copyURI(evt) {
    evt.preventDefault();
    navigator.clipboard.writeText(evt.target.innerHTML).then(() => {
      /* clipboard successfully set */
    }, () => {
      /* clipboard write failed */
    });
}