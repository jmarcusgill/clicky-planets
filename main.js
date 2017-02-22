console.log("poop")

var button = document.getElementById("showPlanets");
var clear = document.getElementById("clear")
var output = document.getElementById("planetHolder");
// var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var planets = [
      {
        name:"Mercury",
        url: ""
    },
    {
        name:"Venus",
        url: ""
    },
    {
        name:"Earth",
        url: ""
    },
    {
        name:"Mars",
        url: ""
    },
    {
        name:"Jupiter",
        url: ""
    },
    {
        name:"Saturn",
        url: ""
    },
    {
        name:"Uranus",
        url: ""
    },
    {
        name:"Neptune",
        url: ""
    },
    {
        name:"NOT PLUTO",
        url: ""
    }
];


button.addEventListener("click", printPlanets);
clear.addEventListener("click", clearOutput);



function printPlanets() {
  output.innerHTML = ""
  for (var i = 0; i < planets.length; i++) {
    var newPlanet = "";
    newPlanet += `<div class="planetBox" id="planetBox-${i}">` //${} denotes a variable
    newPlanet += `<div class="planetName"> ${planets[i].name} </div`; //ES6 String theory. Look it up!
    newPlanet += `</div`
    output.innerHTML += newPlanet;
  }
}

function clearOutput() {
  output.innerHTML = "";
}