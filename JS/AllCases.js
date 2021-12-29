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
    for (let i = 0; i < data.cards.length; i++) {
        let card = document.createElement("case-card");
        card.data = data.cards[i];
        container.appendChild(card);
        console.log(data.cards[i]);
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