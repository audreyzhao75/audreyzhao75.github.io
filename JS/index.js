// to scroll back to top
// https://codepen.io/desirecode/pen/MJPJqV
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll-top-btn').fadeIn();
        } else { 
            $('#scroll-top-btn').fadeOut();
        } 
    }); 
    $('#scroll-top-btn').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});




// All Cases
// var data = {};

// window.addEventListener('DOMContentLoaded', init);

// async function init() {
//     let fetchSuccessful = await fetchCases();
//     if (!fetchSuccessful) {
//         console.log('Cases fetch unsuccessful');
//         return;
//     };

//     // Make and append the cards
//     const container = document.querySelector("#upcoming-cases-container");
//     for (let i = 0; i < data.cards.length; i++) {
//         if(data.cards[i].href === "") {
//             let card = document.createElement("case-card");
//             card.data = data.cards[i];
//             container.appendChild(card);
//         }
//     }

//     // // console.log(recipeData);
//     // // Add the first three recipe cards to the page
//     // createRecipeCards();
// }

// async function fetchCases() {
//     return new Promise((resolve, reject) => {
//         fetch("./cases.json")
//             .then(response => response.json())
//             .then(result => {
//                 data = result;
//                 resolve(true);
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 reject(false);
//             });
//     });
// }