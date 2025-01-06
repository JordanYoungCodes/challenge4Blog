

document.body.classList = "dark";

const dTheme = document.getElementById("dTheme");
dTheme.addEventListener("click", function(event) {
    const currentTheme = event.target.getAttribute("data-theme");
    if (currentTheme === "dark") {
        document.body.classList = "light";
        event.target.setAttribute("data-theme", "light");
    } else {
        document.body.classList = "dark";
        event.target.setAttribute("data-theme", "dark");
    }
});

const wrapperContainer = document.querySelector('.container');
const clearButton = document.querySelector('#clearb');

// Add listener for Clear button to clear localStorage and the DOM content
clearButton.addEventListener("click", function() {
    localStorage.clear();
    wrapperContainer.innerHTML = ''; // Clear displayed blog posts in the container
});

// Retrieve blog posts from localStorage
const blogJson = localStorage.getItem('blogPost');
const blogArray = JSON.parse(blogJson) || []; // Ensure we have an array to iterate

// Loop through blogArray if it's valid
if (Array.isArray(blogArray) && blogArray.length > 0) {
    for (let i = 0; i < blogArray.length; i++) {
        // Create card structure
        const cardWrapper = document.createElement('div');
        cardWrapper.setAttribute('class', 'card newCard m-3 form-control');

        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.textContent = blogArray[i].title;

        const cardName = document.createElement('h6');
        cardName.setAttribute('class', 'card-subtitle mb-2 text-body-secondary');
        cardName.textContent = blogArray[i].userName;

        const cardNotes = document.createElement('p');
        cardNotes.setAttribute('class', 'card-text');
        cardNotes.textContent = blogArray[i].blog;

        // Append elements to card
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardName);
        cardBody.appendChild(cardNotes);
        cardWrapper.appendChild(cardBody);

        // Append card to container in DOM
        wrapperContainer.appendChild(cardWrapper);
    }
} else {
    console.log("No blog posts found in local storage.");
}
