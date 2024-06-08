document.body.classList ="dark"

const dTheme = document.getElementById("dTheme");
dTheme.addEventListener("click", function(event) {
    let currenttheme = event.target.getAttribute("data-theme")
    if(currenttheme === "dark"){

        document.body.classList ="light"
        event.target.setAttribute("data-theme","light")
    }else{
        document.body.classList ="dark"
        event.target.setAttribute("data-theme","dark")

    }

})