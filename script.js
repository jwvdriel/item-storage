// variables

const inputVeld = document.querySelector("#textInput"); // inputField
const buttonVeld = document.querySelector("#voegToe"); // button
const totaalArtikelen = document.querySelector(".totaal-artikelen"); // totaal lijst

let startingValue = 2;
let totaalLijst = [];

// check stored data
const storedDataJSON = localStorage.getItem("totaalAantalItems");

if (storedDataJSON !== null) {
  totaalLijst = JSON.parse(storedDataJSON);
}

// read stored data first argument is the key second is the value
// console.log(localStorage.getItem("totalItems", storedData));

buttonVeld.addEventListener("click", function () {
  // check if input is empty before submitting
  if (inputVeld.value !== "" && inputVeld.value !== null) {
    // pass the input value as argument into the function
    setValueInLocalStorage(inputVeld.value);
    clearInputField();
  }
});

// accept the input value and do something with it
function setValueInLocalStorage(text) {
  const nieuwArtikel = document.createElement("li");
  // append the input value to li element
  nieuwArtikel.textContent = text;
  totaalArtikelen.appendChild(nieuwArtikel);
  // push the value into the array
  totaalLijst.push(text);

  // create the localStorage data first value key: second is the value:
  localStorage.setItem("totaalAantalItems", JSON.stringify(totaalLijst));
}

// clears input field
function clearInputField() {
  inputVeld.value = "";
}

function renderItems() {
  totaalLijst.forEach((item) => {
    // create a new element
    const nieuwArtikel = document.createElement("li");
    // append the input value to li element
    nieuwArtikel.textContent = item;
    nieuwArtikel.classList.add("itemElement");
    totaalArtikelen.appendChild(nieuwArtikel);
  });
}

// shows the item stored in localStorage
renderItems();
