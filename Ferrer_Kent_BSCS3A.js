~// Variables
let customer = "Kent Ferrer";
let product = "Monitor";
let total = "17000";


// Arrays
let customers = ["April", "Kringo", "Andrew"];
let prices = ["1500", "17000", "25000"];
let products = ["Mouse", "Monitor", "Laptop"];


// Conditionals
if (total >=  10000) {
    console.log("You get a 20% discount!");
}
else if (total >= 5000) {
    console.log("You get a 10% discount!");
}
else {
    console.log("No discount");
}


// Loops
for (let i = 0; i < customers.length; i++) {
    console.log("Customer: " + customers[i]);
}

for (let i = 0; i < products.length; i++) {
    console.log("Product: " + products[i]);
}

for (let i = 0; i < prices.length; i++) {
    console.log("Price: " + prices[i]);
}