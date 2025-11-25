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
        $("html, body").animate({ scrollTop: 0 }, 300); 
        return false; 
    }); 
});

const scroll_elems = document.querySelectorAll(".scroll-animation");

const observer = new IntersectionObserver((elems) => {
    elems.forEach((e) => {
        if(e.isIntersecting) {
            e.target.classList.add("scroll-animated");
        }
        // else {
            // e.target.classList.remove("scroll-animated");
        // }
    })
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

for(let i = 0; i < scroll_elems.length; i++) {
    observer.observe(scroll_elems[i]);
}


const scroll_elems_fade = document.querySelectorAll(".fade-in-animation");
const observer_fade = new IntersectionObserver((elems) => {
    elems.forEach((e) => {
        if(e.isIntersecting) {
            e.target.classList.add("fade-in-animated");
        }
        // else {
            // e.target.classList.remove("scroll-animated");
        // }
    })
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

for(let i = 0; i < scroll_elems_fade.length; i++) {
    observer_fade.observe(scroll_elems_fade[i]);
}


// Interactive background for hero section
// const heroContainer = document.getElementById('hero-container');
// if (heroContainer) {
//     heroContainer.addEventListener('mousemove', (e) => {
//         const rect = heroContainer.getBoundingClientRect();
//         const x = ((e.clientX - rect.left) / rect.width) * 100;
//         const y = ((e.clientY - rect.top) / rect.height) * 100;
        
//         heroContainer.style.setProperty('--mouse-x', x + '%');
//         heroContainer.style.setProperty('--mouse-y', y + '%');
//     });
    
//     // Reset position when mouse leaves
//     heroContainer.addEventListener('mouseleave', () => {
//         heroContainer.style.setProperty('--mouse-x', '50%');
//         heroContainer.style.setProperty('--mouse-y', '50%');
//     });
// }

// var starDiv = document.getElementById("starry-bg");
// starDiv.style.background = "rgb(10,200,20)";
// var stage = new createjs.Stage("canvas");

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