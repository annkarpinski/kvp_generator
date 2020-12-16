var kvpInput = document.querySelector("#kvp-text");
var kvpForm = document.querySelector("#kvp-form");
var kvpList = document.querySelector("#kvp-list");
var kvpCountSpan = document.querySelector("#kvp-count");

var kvps = [];

init();

function renderkvps() {
  // Clear kvpList element and update kvpCountSpan
  kvpList.innerHTML = "";
  kvpCountSpan.textContent = kvps.length;

  // Render a new li for each kvp
  for (var i = 0; i < kvps.length; i++) {
    var kvp = kvps[i];

    var li = document.createElement("li");
    li.textContent = kvp;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Remove";

    li.appendChild(button);
    kvpList.appendChild(li);
  }
}

function init() {
  // Get stored kvps from localStorage
  // Parsing the JSON string to an object
  var storedkvps = JSON.parse(localStorage.getItem("kvps"));

  // If kvps were retrieved from localStorage, update the kvps array to it
  if (storedkvps !== null) {
    kvps = storedkvps;
  }

  // Render kvps to the DOM
  renderkvps();
}

function storekvps() {
  // Stringify and set "kvps" key in localStorage to kvps array
  localStorage.setItem("kvps", JSON.stringify(kvps));
}

// When form is submitted...
kvpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var kvpText = kvpInput.value.trim();

  // Return from function early if submitted kvpText is blank
  if (kvpText === "") {
    return;
  }

  // Add new kvpText to kvps array, clear the input
  kvps.push(kvpText);
  kvpInput.value = "";

  // Store updated kvps in localStorage, re-render the list
  storekvps();
  renderkvps();
});

// When an element inside of the kvpList is clicked...
kvpList.addEventListener("click", function (event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the kvp element from the list
    var index = element.parentElement.getAttribute("data-index");
    kvps.splice(index, 1);

    // Store updated kvps in localStorage, re-render the list
    storekvps();
    renderkvps();
  }
});
