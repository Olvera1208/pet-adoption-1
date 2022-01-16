
var animalTypeEl = $("#type");
var genderEl = $("#gender");
var cityArray = [];
console.log("document is ready");

function getUserInput() {

    var searchedLocation = $("#searchInput").val();
    console.log(searchedLocation);
    
    var animalType = animalTypeEl.val();
    console.log(animalType);

    var animalSize = $("#size").val();
    console.log(animalSize);

    var animalGender = genderEl.val();
    console.log(animalGender);

    // store into local storage
    cityArray.push(searchedLocation);
    localStorage.setItem("nameOfCity", JSON.stringify(cityArray));

    if (!searchedLocation) {
        console.error('You need a search input value!');
        return;
    }
    
    var resultPageURL = './listings.html?q=' + searchedLocation + '&format=' + animalType + '&format=' + animalSize + '&format=' + animalGender ; 
    console.log(resultPageURL); 

    location.assign(resultPageURL);


}

$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    getUserInput();

})