const numbers = [45, 65, 23, 98, 19];

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }
//
//
// short vershon
// for (const number of numbers) {
//   console.log(number);
// }
//
//
// const products = [
//   { id: 1, name: "xiami phone One night", price: 19000 },
//   { id: 2, name: "walton phone", price: 9000 },
//   { id: 3, name: "iphone 7+", price: 39000 },
//   { id: 4, name: "mac book air", price: 119000 },
//   { id: 5, name: "Lenovo yoga laptop 2025", price: 49000 },
//   { id: 6, name: "Dell inspriron laptop", price: 69000 },
//   { id: 7, name: "Nokia old age phone gone", price: 30000 },
// ];

// for (const product of products) {
//   console.log(product);
// }

// function matchedProducts(product, search) {
//   const matched = [];
//   for (const product of products) {
//     console.log(product.name.includes(search));
//   }
// }

// const result = matchedProducts(products, "phone");
//
//

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}
const products = [
  { id: 1, name: "xiami phone One night", price: 19000 },
  { id: 2, name: "walton phone", price: 9000 },
  { id: 3, name: "iphone 7+", price: 39000 },
  { id: 4, name: "mac book air", price: 119000 },
  { id: 5, name: "Lenovo yoga laptop 2025", price: 49000 },
  { id: 6, name: "Dell inspriron laptop", price: 69000 },
  { id: 7, name: "Nokia old age phone gone", price: 30000 },
  { id: 7, name: "M1 chip not cheap LapTop", price: 30000 },
];
const result = matchedProducts(products, "laptop");
console.log(result);
