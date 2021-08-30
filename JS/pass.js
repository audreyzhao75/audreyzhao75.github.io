var passButton = document.querySelector("#passButton");

passButton.addEventListener( "click" || "keyup", function (event) {
    var passInput = document.querySelector("#passInput");
    if(event.code === 'Enter' && passInput.value === "popcorn") {
        console.log("Success!");
    }
    if(passInput.value === "popcorn") {
        console.log("Success!");
    }
    else {
        console.log("Failed!");
    }
});



document.querySelector("#passInput").addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            document.querySelector('form').submit();
            console.log("Success!");
        }
    });