const _products = [
  {
    id: 1,
    title: "ipad 4 Mini",
    price: 999,
    inventory: 2
  },
  {
    id: 2,
    title: "novel 6 5G",
    price: 3799,
    inventory: 6
  },
  {
    id: 3,
    title: "p10 plus",
    price: 4399,
    inventory: 5
  }
];
export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 1000);
  }
};
