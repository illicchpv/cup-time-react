export const API_URL = 'https://cup-time-api-q31j.onrender.com';

export const API_URL_ALL_PRODUCTS = 'https://cup-time-api-q31j.onrender.com/api/products';
export const API_URL_PRODUCTS_BY_CATEGORY = 'https://cup-time-api-q31j.onrender.com/api/products/';
export const API_URL_PRODUCTS_BY_IDS = 'https://cup-time-api-q31j.onrender.com/api/products/list?ids=';
export const API_URL_POST_ORDER = 'https://cup-time-api-q31j.onrender.com/api/orders';

/*
https://cup-time-api-q31j.onrender.com/api-docs/
  Product API
 

https://cup-time-api-q31j.onrender.com/api/products

/api/products/{category} // получить продукты по категории
/api/products // Получить все продукты
/api/products/list?ids=1,2,3 // получить список товаров по id (1,2,3 для примера)
/api/orders // POST запрос для отправки заказа



{
    "id": 1,
    "title": "Кокосовая матча",
    "img": "/images/tea1.jpg",
    "price": 390,
    "additional": {
        "вес": "100 г",
        "дата сбора": "14.08.2023",
        "страна": "Япония"
    }
}
    
*/

export function calcTotalCount(cart) {
  if(!cart) return 0;
  return cart.reduce((acc, p) => acc + p.quantity, 0);
}

export function translateCategory(category) {
  switch (category) {
    case 'tea':
      return 'Чаи';
    case 'coffee':
      return 'Кофе';
    case 'teapots':
      return 'Чайники';
    case 'cezves':
      return 'Турки';
    case 'other':
      return 'Прочее';
    default:
      return category;
  }
}

export const debounce = (fn, ms) => {
  let lastCall = 0;
  let lastCallTimer = 0;

  return function (...args) {
    const prevCall = lastCall;
    lastCall = Date.now();
    if (prevCall && lastCall - prevCall < ms) {
      clearTimeout(lastCallTimer);
    }
    lastCallTimer = setTimeout(() => fn.apply(this, args), ms);
  };
};
