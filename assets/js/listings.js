var id = "ZcKtUZMgFFfliTA8WJ44rxuXNaeRIBxRujgC6Qr091KR3cHQax";
var secret = "Ox43xtVk71ClFsfzk2T4UpxLzIYAXfJCyLPO8iEq";

// Global varaibles
var petFinderToken = "";
var petFinderTokenExpiresAt = 0; // Set to Unix time for expiration of the token.
var failedAttempts = 0; // Keep track of failed requests to stop if too many fail.

// This function appends messages to the #log div with the current time
function log(message) {
    var pEl = document.createElement("p");
    pEl.textContent = moment().format("HH:mm:ss.SSS") + ": " + message;
    document.querySelector("#log").appendChild(pEl);
}

// This function will first check if there is a valid token. If there
// isn't, it will get a token before requesting the given animal type from
// the api.  It will abort if it has already failed more than 3 times.
function getAnimals(animalType) {
    // This condition will exit the function to avoid getting into an infinite loop.
    if (failedAttempts > 3) {
        log("Stopped trying to get animals. Failed too many times");
        return;
    }

    // check to see if the token expired
    if (petFinderTokenExpiresAt < Date.now() - 1000) {
        log("Token expired or hasn't been fetched yet.");
        // the token has expired, so first get a new one, then run getAnimals
        getPetfinderToken().then(function () {
            getAnimals(animalType);
        });
        // Stop the function since the token is no good.
        return;
    }

    log("Fetching animals with type='" + animalType + "'");

    // Token is good, request animals
    fetch("https://api.petfinder.com/v2/animals?type=" + animalType, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + petFinderToken,
            },
        })
        .then(function (response) {
            if (!response.ok) {
                // increment failed attempts
                failedAttempts++;
                log(
                    "HTTP error occured. Status: " +
                    response.status +
                    " Failed attempts: " +
                    failedAttempts
                );
            }
            return response.json();
        })
        .then((data) => {
            log(
                "Received " +
                data.animals.length +
                " " +
                animalType +
                "s. Open the console to view the data."
            );
            console.log("Success:", data);
            for(i=0; i <= 19; i++) {
                console.log("Success", data);
            }
        })
        .catch((error) => {
            // Don't try again. Something unexpected is wrong here.
            failedAttempts = Infinity;
            log("An error occured trying to fetch animals. Open the console.");
            console.error("Error:", error);
        });
}

// This function will get the access token.
function getPetfinderToken() {
    log("Requesting auth token");

    // Use return here so that we can add a .then() after calling
    // getPetFinderToken()
    return fetch("https://api.petfinder.com/v2/oauth2/token", {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
            body: "grant_type=client_credentials&client_id=" +
                id +
                "&client_secret=" +
                secret,
        })
        .then(function (response) {
            if (!response.ok) {
                log("HTTP error occured. Status: " + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            log("Token received: " + data.access_token);

            // The API gives the expiration in seconds, but JavaScript uses
            // milliseconds, so multiply the expiration by 1000 to convert
            // seconds to milliseconds.
            petFinderTokenExpiresAt = Date.now() + data.expires_in * 1000;
            petFinderToken = data.access_token;
            // reset failed attempts
            failedAttempts = 0;
        })
        .catch(function (error) {
            // Don't try again. Something unexpected is wrong here.
            failedAttempts = Infinity;
            console.error("Error:", error);
            log("An error occured trying to fetch animals. Open the console.");
        });
}

// Find some dogs
getAnimals("dog");