const devProjUrl = 'https://www.api.peterhagane.dev';
var devProjects;

fetch(devProjUrl + '/dev-projects').then(function (response) {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(response);
}).then(function (data) {
    devProjects = data;
    console.log(data);
}).catch(function (error) {
    console.warn(error);
}).finally(function () {
    renderProjects();
});



function renderProjects() {
    var projectHTML = `
    <h2 class="text-gr">Projects</h2>
    <div class="cards flexRow flexCenter">
    ${setProjectCards()}
    </div>
`
    function setProjectCards() {
        let pHTML = ``;
        try {
            for (i = 0; i < devProjects.length; i++) {
                let json = devProjects[i];

                let tags = "";
                for (v = 0; v < json.dev_tags.length; v++) {
                    tags += `<div class="tag"> ${json.dev_tags[v].tname}</div>`
                }
                
                let projlink ="";
                let replink = "";
                for (v = 0; v < json.purls.urls.length; v++) {
                    if(json.purls.urls[v].includes("github") || json.purls.urls[v].includes("gitlab")){
                        replink += `<a class="repository" href="${json.purls.urls[v]}"><img class="repositoryimg" src="img/gitlab.svg"></img></a>`
                    }
                    else if(json.purls.urls[v] != ""){
                        projlink += json.purls.urls[v];
                    }
                    else{
                        projlink = "";
                    }                    
                }

                pHTML += `
                <div class="card flexColumn">
                <img src="${devProjUrl + json.pimg[0].url}"></img>
                <h4><a href="${projlink}">${json.ptitle}</a></h4>
                <p>${json.pdesc}</p>
                <div class="flexfill"></div>
                ${replink}               
                <div class="flexRow flex">${tags}</div>
                </div>
                `
                console.log(json.ptitle);
                // <h4>${devProjects[project].ptitle}</h4>
                // <p>${devProjects[project].ptags.tags}</p>
            }
        } catch (error) {
            console.log("Error reading JSON object: " + error);
        }
        // pHTML += `<div class="cardfill"></div>`
        return pHTML;
    }

    var projects = document.getElementById("projects");
    projects.setAttribute("class", "flexColumn text-gr");
    projects.innerHTML = projectHTML;
}



// dummy data
// var projects = [
//     {
//         pimg: "img/textgraphic.svg",
//         purl: "",
//         ptitle:"Title",
//         ptags: {tags: ["JS", "C#"]}
//     },
//     {
//         pimg: "img/textgraphic.svg",
//         purl: "",
//         ptitle:"Title2",
//         ptags: {tags: ["JS", "HTML"]}
//     },
//     {
//         pimg: "img/textgraphic.svg",
//         purl: "",
//         ptitle:"Title",
//         ptags: {tags: ["JS", "C#"]}
//     },
//     {
//         pimg: "img/textgraphic.svg",
//         purl: "",
//         ptitle:"Title2",
//         ptags: {tags: ["JS", "HTML"]}
//     }    
// ]
