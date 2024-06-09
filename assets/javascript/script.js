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
            return;
    }

})


// trying to get input from form
//const submitBtn = document.querySelector("#submitBtn");
let title1 = document.getElementById(title1).textContent;
let userName1 = document.querySelector("#UserName1").textContent;
let blog1 = document.querySelector('#Notes').value;


localStorage.setItem("blog", blog1);
blog1.textContent = blog1;
localStorage.setItem("title", title1);

localStorage.setItem("UserName", userName1);
    userName1.textContent = userName1;
//  //submitBtn.addEventListener('click',function(event) {
//     event.preventDefault(); 
    
    
console.log("title1");
    
    
    
//     