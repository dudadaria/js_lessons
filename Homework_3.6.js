"use strict"

const products = [
  {
    id: 3,
    price: 127,
    photos: [
      "1.jpg",
      "2.jpg",
    ]
  },
  {
    id: 5,
    price: 499,
    photos: []
  },
  {
    id: 10,
    price: 26,
    photos: [
      "3.jpg"
    ]
  },
  {
    id: 8,
    price: 78,
  },
];


let photoProducts = products.filter(function (product) {
  if (product.photos === undefined) {
    return false;
  }
  if (product.photos.length === 0) {
    return false
  }
  return true
})

console.log(photoProducts);


products.sort((a, b) => {
  if (a.price > b.price) return 1;
  if (a.price < b.price) return -1;
  if (a.price === b.price) return 0;
})

console.log(products)
