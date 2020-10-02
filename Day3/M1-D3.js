/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */
    const positiveArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
    
const user = {
        name: "Ari",
        surename: "Razab",
        eMail: "arianrazab@yahoo.com",
        age: "26",
};
    
    

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */

user.hasDriverLicense = true;


/*
var age = 18;

if(user.age >= age)
{
    console.log("Has a driving license");
} else {
    console.log("Does not have a driving license");
}

*/


/* EXERCISE 4
Remove from the previously created object the age
*/

/* WRITE YOUR CODE HERE */
delete user.age;

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* WRITE YOUR CODE HERE */
    const user2 = {
        name: "The",
        surename: "Dude",
        eMail: "thedudeson@gmail.com",
    };

    console.log(user.eMail !== user2.eMail);

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than >50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */
    let totalShoppingCart = 120;
    if (totalShoppingCart > 50) {
        console.log("Free shipping")
    } else {
        console.log("+$10 Shipping", totalShoppingCart);
        console.log("the total is", totalShoppingCart + 10, "$");
    }


    


/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */

let totalShoppingCart0 = totalShoppingCart * 0.80;
console.log("20% discount", totalShoppingCart0, "$");

if (totalShoppingCart0 > 50) {
    console.log("Free shipping")
} else {
    console.log("+$10 Shipping", totalShoppingCart0);
    console.log("the total is", totalShoppingCart0 + 10, "$");
}


/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */
const car0 =  {
    brand: "Tesla",
    model: "X 2020",
    licensePlate: "Az:Zr 6969",
} 
const car1 = Object.assign({}, car0);
car1.licensePlate = "Az:zr 5252";
const car2 = Object.assign({}, car0);
car2.licensePlate = "Az:zr 1234";
const car3 = Object.assign({}, car0);
car3.licensePlate = "Az:zr 5555";
const car4 = Object.assign({}, car0);
car4.licensePlate = "Az:zr 6666";
const car5 = Object.assign({}, car0);
car5.licensePlate = "Az:zr 7777";


//better way
const car = {
    brand: "Toyota",
    model: "Corolla",
    licensePlate: "NL1-LDK-36",
}

const cars = []
for (let c = 0; c <= 4; c++) {
    cars.push(Object.assign({}, car)); 
    cars[c].licensePlate = car.licensePlate.slice(0, -1) + c;
}

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */
let carsForRent = [car0, car1, car2, car3, car4, car5]
console.log(carsForRent);
/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */
carsForRent.shift();
carsForRent.pop();
console.log(carsForRent);


/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* WRITE YOUR CODE HERE */
//delete car2.model;
console.log(typeof car2.licensePlate);


/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* WRITE YOUR CODE HERE */

const carsForSale = [car0, car5, car4]

const totalCars = carsForRent.length + carsForSale.length;

console.log(totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* WRITE YOUR CODE HERE */
for(let i = 0; i < carsForSale.length; i++){

    console.log( i + 1 + "# Car") 
    console.log("Brand: ", carsForSale[i].brand)
    console.log("Model: ", carsForSale[i].model)
    console.log("License Plate: ", carsForSale[i].licensePlate)
    //console.log(carsForSale[i])
}


/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
