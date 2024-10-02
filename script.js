const mlProject = document.getElementById("ml-project");
const cliProject = document.getElementById("cli-project");
const snsProject = document.getElementById("sns-project");



function projectOnHover(project){
    project.target.style.backgroundColor = "#557373";
}

function projectOnHoverOut(project){
    project.target.style.backgroundColor = "#dfe5f3";
}

function hoverHandlingProjects(project){
    project.addEventListener("mouseenter", projectOnHover)
    project.addEventListener("mouseleave", projectOnHoverOut)
}


hoverHandlingProjects(mlProject)
hoverHandlingProjects(cliProject)
hoverHandlingProjects(snsProject)

