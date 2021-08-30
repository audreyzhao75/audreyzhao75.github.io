const switchContainer = document.querySelector("#switchButton-container");
const switchButton = document.querySelector(".switchButton");

function changeButton() {
    var body = document.querySelector("body");

    switchButton.addEventListener("click", () => {
        if(switchButton.id == "darkButton") {
            switchButton.id = "lightButton"
            switchButton.src = "/images/Light Button.png";
            // body.style.filter = "invert(1)";

            // change to light mode
            body.style.backgroundColor = "white";
            document.querySelector("#navbar").style.backgroundColor = "white";
            document.querySelector("#AboutMeNav").style.color = "black";
            document.querySelector(".jumbotron").style.backgroundColor = "rgb(226, 228, 238)";
            document.querySelector("#header-tags").style.color = "#52acff";
            document.querySelector("#myName").style.color = "#0658A2";
            document.querySelector(".lead").style.color = "black";
            document.querySelector(".caseSection-title").style.color = "black";
            document.querySelector("#end-tag").style.color = "black";
            document.querySelector("#githubLogo").style.filter = "invert(0)";
        }
        else if (switchButton.id == "lightButton") {
            switchButton.id = "darkButton"
            switchButton.src = "/images/Dark Button.svg";
            // body.style.filter = "invert(0)";

            // change to dark mode
            body.style.backgroundColor = "rgb(44, 44, 44)";
            document.querySelector("#navbar").style.backgroundColor = "rgb(44, 44, 44)";
            document.querySelector("#AboutMeNav").style.color = "aliceblue";
            document.querySelector(".jumbotron").style.backgroundColor = "rgb(66, 66, 66)";
            document.querySelector("#header-tags").style.color = "#9bcfff";
            document.querySelector("#myName").style.color = "#52acff";
            document.querySelector(".lead").style.color = "#e2e4ee";
            document.querySelector(".caseSection-title").style.color = "white";
            document.querySelector("#end-tag").style.color = "white";
            document.querySelector("#githubLogo").style.filter = "invert(1)";
        }
    });
}

if(document.querySelector("title").innerText == "Audrey's Portfolio") {
    changeButton();
}
else {
    var elem = document.getElementById("darkButton");
    elem.parentNode.removeChild(elem);
}