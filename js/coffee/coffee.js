"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<div class="coffeeBox">'
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>'
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            console.log(selectedRoast)
        } else if(selectedRoast === 'All Roasts'){
            filteredCoffees.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//The searchIt() function searches coffees by name
function searchIt () {
    // document.addEventListener('keyup', function (event) {
    let searcher = document.getElementById('searchBar')
    let filter = searcher.value.toLowerCase()
    let newList = []
    coffees.forEach(function(coffee) {
        let searchCoff = coffee.name.toLowerCase()
        let x = searchCoff.includes(filter)
        if (x) {
            newList.push(coffee)
            tbody.innerHTML = renderCoffees(newList)
        }
    })
    // })
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees  = localStorage.getItem('coffeeArr') ? JSON.parse(localStorage.getItem('coffeeArr')) : [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');


//ADD NEW COFFEE FUNCTIONALITY
const addCoffeeButton = document.querySelector('#submitNew');
addCoffeeButton.addEventListener('click', event => {
    event.preventDefault();
    const newCoffeeRoast = document.getElementById("add-roast").value;
    const newCoffeeNames = document.getElementById("coffeeName").value;
    let newCoffeeName = newCoffeeNames.charAt(0).toUpperCase() + newCoffeeNames.slice(1);
    let newCoffee = {id: (coffees.length + 1), name: newCoffeeName, roast: newCoffeeRoast};

    coffees.push(newCoffee);
    localStorage.setItem("coffeeArr", JSON.stringify(coffees));
    tbody.innerHTML = renderCoffees(coffees);
});

tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees)