/* eslint-disable no-unused-vars */
import {useContext, useEffect} from "react";
import {useState} from "react";
import {createContext} from "react";
import {API_URL_POST_ORDER} from "../const";

const OrderContext = createContext();

const orderDetailsDefault = {
  name: "",
  phone: "",
  address: "",
  payment: "cash",
};

export const OrderProvider = ({children}) => {
  const [orderDetails, setOrderDetails] = useState(orderDetailsDefault);

  const updateOrderDetails = (field, value) => {
    setOrderDetails(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const clearOrderDetails = () => {
    setOrderDetails(orderDetailsDefault);
  };

  // useEffect(() => {
  //   fetch(API_URL_POST_ORDER)
  //     .then(res => {
  //       if (!res.ok)
  //         throw new Error('Error fetching Order. res:', res);
  //       return res.json();
  //     })
  //     .then(data => setOrderDetails(data))
  //     .catch(err => console.log('Error fetching Order. err:', err));
  // }, [orderDetails]);
  /*
  {
  "name": "string",
  "phone": "string",
  "address": "string",
  "items": [
    {
      "id": 0,
      "quantity": 0
    }
  ]
}
*/

  return (
    <OrderContext.Provider value={{orderDetails, updateOrderDetails, clearOrderDetails}}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};