document.body.classList ="dark"

const dTheme = document.getElementById("dTheme");
dTheme.addEventListener("click", function(event) {
    let currenttheme = event.target.getAttribute("data-theme")
    if(currenttheme === "dark"){

        document.body.classList ="light"
        event.target.setAttribute("data-theme","light")
    }else{
        document.body.classList ="dark"
        event.target.setAttribute("data-theme","dark");
            
    }

})

const wrapperContainer = document.querySelector('.container')
const bpTitle = document.querySelector('#cardTitle').value;
const bpName = document.querySelector('#bpuserName').value;
const bpNotes = document.querySelector('#notes').value;
const blogJson = localStorage.getItem('blogPost');
const blogPostArray = JSON.parse(localStorage.getItem('blogPost')) || [];
const blogArray = JSON.parse(blogJson);

const clearButton = document.querySelector('#clearb');
clearButton.addEventListener("click", function(){
    localStorage.clear();
})

for(let i = 0; i < blogArray.length; i++) {
    // outer card wrapper
    let cardWrapper = document.createElement('div');
    cardWrapper.setAttribute('class', 'card newCard m-2');

    // card-body
    let cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')

    // card-title
    let cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title');

    let cardName = document.createElement('h6');
    cardName.setAttribute('class', 'card-subtitle mb-2 text-body-secondary');

    let cardNotes = document.createElement('p');
    cardNotes.setAttribute('class', 'card-text' )



    // set Id
    cardTitle.textContent = blogArray[i].title;
    cardName.textContent = blogArray[i].userName;
    cardNotes.textContent = blogArray[i].blog;

    cardWrapper.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardName);
    cardBody.appendChild(cardNotes);


    console.log(cardWrapper)  
   
    // WE HAVE TO REMEMEBR TO PUT IT IN THE DOM/BROWSER 
    wrapperContainer.appendChild(cardWrapper);
}
