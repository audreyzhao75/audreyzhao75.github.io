// All Cases
var data = {};

window.addEventListener('DOMContentLoaded', init);

async function init() {
    let fetchSuccessful = await fetchCases();
    if (!fetchSuccessful) {
        console.log('Cases fetch unsuccessful');
        return;
    };

    // Make and append the cards
    const container = document.querySelector("#cases-container");

    const sectionTitles = [];

    for (let i = 0; i < data.cards.length; i++) {
        let card = document.createElement("case-card");
        card.data = data.cards[i];
        // find which section to put it in
        if(sectionTitles.includes(data.cards[i].year)) {
            const yearElement = document.getElementById(data.cards[i].year);
            yearElement.parentNode.insertBefore(card, yearElement.nextSibling);
            // yearElement.appendChild(card);
        }
        else {
            const newTitle = document.createElement("h1");
            newTitle.className = "section-title";
            newTitle.setAttribute("id", data.cards[i].year);
            newTitle.innerHTML = data.cards[i].year;
            sectionTitles.push(data.cards[i].year);
            container.appendChild(newTitle);
            container.appendChild(card);
        }

        // container.appendChild(card);
        // console.log(data.cards[i]);
    }

    // // console.log(recipeData);
    // // Add the first three recipe cards to the page
    // createRecipeCards();
}

async function fetchCases() {
    return new Promise((resolve, reject) => {
        fetch("./cases.json")
            .then(response => response.json())
            .then(result => {
                data = result;
                resolve(true);
            })
            .catch((error) => {
                console.error('Error:', error);
                reject(false);
            });
    });
}