/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */
const arr = [1, 2, 3, 4, 5];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
const myObj = {
  name: "Mario",
  surname: "Rosso",
  email: "Luca@rosso.com",
  age: 20,
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */

myObj["driveLicense"] = true;

/* EXERCISE 4
Remove from the previously created object the age
*/

/* WRITE YOUR CODE HERE */

delete myObj["age"];
// console.log(myObj);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* WRITE YOUR CODE HERE */
const newObj = {
  name: "Mario",
  surname: "Rossi",
  email: "Luca@rossi.com",
  age: 25,
};

console.log("is the same email? ", newObj.email === myObj.email);

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */
let totalShoppingCart = 51;
let shippingCost = 10;
let freeShipping = false;
let totalCost;

// if (totalShoppingCart >= 50) {
//   freeShipping = true;
//   totalCost = totalShoppingCart;
//   console.log("Total: " + totalCost + "€");
// } else {
//   freeShipping = false;
//   totalCost = totalShoppingCart + shippingCost;
//   console.log("Cart amount: " + totalShoppingCart + "€");
//   console.log("Shipping cost: " + shippingCost + "€");
//   console.log("Total: " + totalCost + "€");
// }

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */
let isBlackFriday = true;

if (totalShoppingCart >= 50) {
  freeShipping = true;
}

totalCost = freeShipping ? totalShoppingCart : totalShoppingCart + shippingCost;

if (!isBlackFriday) {
  console.log("Total: " + totalCost + "€");
} else if (isBlackFriday) {
  discount = (totalCost / 100) * 20;
  total = totalCost - discount;

  console.log("Cart amount: " + totalShoppingCart + "€");
  freeShipping
    ? console.log("Free Shipping")
    : console.log("Shipping cost: " + shippingCost + "€");

  console.log("Subtotal: " + totalCost + "€");
  isBlackFriday ? console.log("Black Fiday Discount: 20%") : null;
  console.log("______________________");
  console.log("Total: " + total + "€");
}

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */
const car = {
  brand: "Ford",
  model: "Focus",
  licensePlate: "AB140EF",
};

const car1 = Object.assign({}, car);
car1["licensePlate"] = "FF891GB";
const car2 = Object.assign({}, car);
car2["licensePlate"] = "AR812EL";
const car3 = Object.assign({}, car);
car3["licensePlate"] = "OA181BG";
const car4 = Object.assign({}, car);
car4["licensePlate"] = "FQ711TB";
const car5 = Object.assign({}, car);
car5["licensePlate"] = "HO445FG";

console.log("car1", car1);
console.log("car2", car2);
console.log("car3", car3);
console.log("car4", car4);
console.log("car5", car5);
console.log("original car", car);

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */

const carsForRent = [car, car1, car2, car3, car4, car5];
console.log("carsForRent original", carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */

carsForRent.shift();
carsForRent.pop();
console.log("carsForRent after", carsForRent);

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* WRITE YOUR CODE HERE */
console.log("typeof car: ", typeof carsForRent[2]);
console.log("typeof licensePlate: ", typeof carsForRent[2].licensePlate);
console.log("typeof brand: ", typeof carsForRent[2].brand);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* WRITE YOUR CODE HERE */

const car6 = Object.assign({}, car);
car6["licensePlate"] = "OP575EA";
const car7 = Object.assign({}, car);
car7["licensePlate"] = "BB233TA";
const car8 = Object.assign({}, car);
car8["licensePlate"] = "VF671SA";

const carsForSale = [car6, car7, car8];
let totalCars = carsForRent.length + carsForSale.length;

console.log("total number of cars for rent and for sale: ", totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* WRITE YOUR CODE HERE */

for (i = 0; i < carsForSale.length; i++) {
  console.log(i + 1 + "# Car");
  console.log("brand: ", carsForSale[i].brand + ",");
  console.log("model: ", carsForSale[i].model + ",");
  console.log("licensePlate: ", carsForSale[i].licensePlate);
  console.log("___________________________");
}

/* WHEN YOU ARE FINISHED
Send the code in Discord via message to your tutor! In the next days we'll also learn how to use GIT 
*/
