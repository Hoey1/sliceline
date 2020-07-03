export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export const foodItems = [
  {
    name: "Buffalo Pizza",
    img: "/img/buffalo-pizza.jpg",
    section: "Regional Specialty",
    price: 2.5,
  },
  {
    name: "Arugula Pizza",
    img: "img/arugula-pizza.jpg",
    section: "Hippy Pizzas",
    price: 3.25,
  },
  {
    name: "Veggie Pizza",
    img: "img/veggie-pizza.jpg",
    section: "Hippy Pizzas",
    price: 2.75,
  },
  {
    name: "Deep Dish Pizza",
    img: "img/deep-dish-pizza.jpg",
    section: "Regional Specialty",
    price: 4,
  },
  {
    name: "Cheese Pizza",
    img: "/img/white-pizza.jpg",
    section: "Plain Jane",
    price: 1.25,
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pepperoni-pizza.jpg",
    section: "Plain Jane",
    price: 1.5,
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
