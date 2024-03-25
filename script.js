document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => dogsImage(data))
        .catch(error => console.error("Error fetching dog:", error));
});

function dogsImage(dog) {
    const dogsPhotos = document.getElementById("dogs");
    const card = document.createElement("div");
    const cardElement = `
        <div class="card-body">
            <img class="img-fluid" src="${dog.message}" alt="Dog" style="width:600px;" />
            <p>Pet Name: ${getPetName()}</p>
            <button class="refreshButton">Refresh the screen to see next</button>
        </div>
    `;
    card.innerHTML = cardElement;
    dogsPhotos.appendChild(card);
    
    const refreshButton = card.querySelector(".refreshButton");
    refreshButton.addEventListener("click", newImage);
}

function newImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector(".img-fluid");
            img.src = data.message;
        })
        .catch(error => console.error("Error fetching dog:", error));
}

function getPetName() {
    const adjectives = ["Happy", "Funny", "Cute", "Silly", "Playful", "Loyal", "Sweet", "Brave", "Gentle", "Fierce"];
    const nouns = ["Dog", "Cat", "Puppy", "Kitten", "Paw", "Whisker", "Tail", "Snout", "Furball", "Purr"];
    
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return `${randomAdjective} ${randomNoun}`;
}


