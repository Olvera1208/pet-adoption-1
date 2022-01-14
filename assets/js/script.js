console.log("document ready")
var submitBtn = document.querySelector("#submit-btn");
var searchInput = document.querySelector("#searchInput");
var animalType = document.querySelector("#type");
var size = document.querySelector("#size");

var cityArray = [];

console.log("document is ready");

function getUserInput() {
    console.log("Submit btn is clicked");

    var searchedLocation = searchInput.value;
    console.log(searchedLocation);
    
    var animalType = animalType.value;
    console.log(animalType);

    // var animalSize = size.value;
    // console.log(animalSize);

    // store into local storage
    // cityArray.push(searchedLocation);
    // localStorage.setItem("nameOfCity", JSON.stringify(cityArray));

    // var animalType = animalType.value;
    // console.log(animalType);

    if (!searchedLocation) {
        console.error('You need a search input value!');
        return;
    }

    // var resultPageURL = './listings.html?q=' + searchedLocation + '&format=' + animalType + '&format=' ; 

    // var resultPageURL = './listings.html';
    // location.assign(resultPageURL);


}

submitBtn.addEventListener("click", function (event) {
    getUserInput();

})