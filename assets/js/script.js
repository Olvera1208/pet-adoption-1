var animalTypeEl = $("#type");
var genderEl = $("#gender");
console.log("document is ready");

function getUserInput() {

    var animalType = animalTypeEl.val();
    console.log(animalType);

    var animalSize = $("#size").val();
    console.log(animalSize);

    var animalGender = genderEl.val();
    console.log(animalGender);

    // store into local storage
    

    var resultPageURL = './listings.html?' + 'type=' + animalType + '&size=' + animalSize + '&gender=' + animalGender;
    console.log(resultPageURL);

    location.assign(resultPageURL);


}

$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    getUserInput();

})