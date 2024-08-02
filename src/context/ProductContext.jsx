import {useContext, useEffect} from "react";
import {useState} from "react";
import {createContext} from "react";
import {API_URL_PRODUCTS_BY_CATEGORY} from "../const";

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (!category) return;

    fetch(API_URL_PRODUCTS_BY_CATEGORY + category)
      .then(res => {
        if (!res.ok)
          throw new Error('Error fetching products. res:', res);
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => console.log('Error fetching products. err:', err));

  }, [category]);

  return (
    <ProductContext.Provider value={{products, setCategory}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
}