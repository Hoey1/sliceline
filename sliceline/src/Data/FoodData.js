export const foodItems = [
  {
    name: "Buffalo Pizza",
    img: "/img/buffalo-pizza.jpg",
    section: "Regional Specialty",
  },
  {
    name: "Arugula Pizza",
    img: "img/arugula-pizza.jpg",
    section: "Hippy Pizzas",
  },
  {
    name: "Veggie Pizza",
    img: "img/veggie-pizza.jpg",
    section: "Hippy Pizzas",
  },
  {
    name: "Deep Dish Pizza",
    img: "img/deep-dish-pizza.jpg",
    section: "Regional Specialty",
  },
  {
    name: "Cheese Pizza",
    img: "/img/white-pizza.jpg",
    section: "Plain Jane",
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pepperoni-pizza.jpg",
    section: "Plain Jane",
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
