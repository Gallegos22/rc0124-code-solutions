const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const newArray = prices.map(function (originalPrice: number) {
  return {
    price: originalPrice,
    salePrice: originalPrice / 2,
  };
});

console.log('Price Objects:', newArray);

const newArray2 = prices.map(function (originalPrice: number) {
  return {
    price: `$${originalPrice.toFixed(2)}`,
  };
});

console.log('Formatted Prices:', newArray2);
