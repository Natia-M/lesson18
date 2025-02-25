//1. დავალება
function isTenMultiple(num) {
  return num % 10 === 0;
}
console.log(isTenMultiple(20));
console.log(isTenMultiple(33));
//2. დავალება
function getDiscountedPrice(price, discount) {
  return price - (price * discount) / 100;
}
console.log(getDiscountedPrice(1000, 10));
console.log(getDiscountedPrice(500, 20));
//3. დავალება
function getCurrencySymbolFromCode(code) {
  switch (code) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GEL":
      return "₾";
    default:
      return "მოცემული ვალუტის შესაბამის სიმბოლო არ არის";
  }
}
console.log(getCurrencySymbolFromCode("USD"));
console.log(getCurrencySymbolFromCode("EUR"));
console.log(getCurrencySymbolFromCode("GEL"));
console.log(getCurrencySymbolFromCode("TR"));
//4. დავალება
function toLowerCase(str) {
  return str.toLowerCase();
}
console.log(toLowerCase("MY NAME IS NATIA"));
console.log(toLowerCase("HELLO WORLD"));
//5. დავალება
function getEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(getEvenNumbers([11, 15, 19, 22, 28]));
//6. დავალება
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 100 },
];

function getCheapestProduct(products) {
  return products.reduce((cheapest, product) =>
    product.price < cheapest.price ? product : cheapest
  );
}
console.log(getCheapestProduct(products));
//7. დავალება
const items = [
  { title: "Book", price: 30 },
  { title: "Pen", price: 5 },
  { title: "Notebook", price: 15 },
];

function findItemByTitle(items, searchTitle) {
  return (
    items.find((item) => item.title === searchTitle) || "ელემენტი არ მოიძებნა"
  );
}

console.log(findItemByTitle(items, "Pen"));
console.log(findItemByTitle(items, "Laptop"));
