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
        card.className = "case_card";
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





// cases.json


// {
//     "name": "VR Research Intern",
//     "year": "2022",
//     "href": "",
//     "id": "VR-Research-thumb",
//     "image": "/IndexThumbs/WIP-VR-Research-Intern.png",
//     "alt": "VR Research Case Study Thumbnail"
// },

        // {
        //     "name": "KORG",
        //     "year": "2023",
        //     "href": "",
        //     "id": "KORG-thumb",
        //     "image": "/IndexThumbs/WIP-KORG.svg",
        //     "alt": "KORG Case Study Thumbnail"
        // },
        // {
        //     "name": "MaXentric",
        //     "year": "2023",
        //     "href": "",
        //     "id": "MaX-thumb",
        //     "image": "/IndexThumbs/WIP-MaXentric-Intern.svg",
        //     "alt": "MaXentric Case Study Thumbnail"
        // },


        // {
        //     "name": "Artree",
        //     "year": "2022",
        //     "href": "",
        //     "id": "Artree-thumb",
        //     "image": "/IndexThumbs/WIP-Artree.svg",
        //     "alt": "Artree Case Study Thumbnail"
        // }