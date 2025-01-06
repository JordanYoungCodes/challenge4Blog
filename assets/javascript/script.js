
const dTheme = document.getElementById('dTheme');



document.body.classList.add("dark");
dTheme.setAttribute("data-theme", "dark");


dTheme.addEventListener("click", function(event) {
    let currenttheme = document.body.classList.contains("dark") ? "dark" : "light";
    if(currenttheme === "dark"){

        document.body.classList.remove("dark");
        document.body.classList.add("light");
        event.target.setAttribute("data-theme", "light");
    }else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        event.target.setAttribute("data-theme", "dark");
        
    }

})


const form2 = document.querySelector('#form2')

 
 
 

form2.addEventListener("submit", function(event){
    event.preventDefault();
    let title = document.querySelector("#title1").value;
    let userName = document.querySelector("#UserName1").value;
    let blog = document.querySelector('#Notes').value;
    const blogPost = {
     title, userName, blog
    }

if(title === "" || userName === "" || blog === ""){
        window.alert("please complete the form");
        return;
    
    }
    const blogPostArray = JSON.parse(localStorage.getItem('blogPost')) || [];
    blogPostArray.push(blogPost);
    localStorage.setItem('blogPost', JSON.stringify(blogPostArray));
  
    window.location.href = './blog.html'
})



    

    
    
