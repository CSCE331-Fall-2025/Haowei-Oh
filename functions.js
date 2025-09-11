function loadStyle()
{
    var pageStyle = localStorage.getItem("page_style_name");
    if(pageStyle === null)
    {
        pageStyle = "dark.css"; // Default to dark mode
    }
    document.getElementById("page_style").setAttribute("href", pageStyle);
}

function light_mode()
{
    localStorage.setItem("page_style_name", "light.css");
    loadStyle();
}

function dark_mode()
{
    localStorage.setItem("page_style_name", "dark.css");
    loadStyle();
}

function toggle()
{
    if(localStorage.getItem("page_style_name") === "dark.css")
    {
        light_mode();
    }
    else
    {
        dark_mode();
    }
}

//Style maintained
function goToAbout()
{
    window.location.href = "about.html";
}

function goToMain()
{
    window.location.href = "index.html";
}

function goToService()
{
    window.location.href = "service.html";
}

function goToProjects()
{
    window.location.href = "projects.html";
}
function goToAIPage()
{
    window.location.href = "AI.html";
}

loadStyle();