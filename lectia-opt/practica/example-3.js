/*
## Example 3 - Filter method

Let the `filterByPrice` function return an array of cars whose price is less
than the value of the `threshold` parameter.
*/

import { cars } from "./carsData.js";

const filterByPrice = (cars, threshold) => {
  const newCars = cars.filter((car) => car.price < threshold);
  return newCars;
};

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));
