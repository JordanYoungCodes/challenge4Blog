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



    

    
    
    
//     