import {Route, Routes} from "react-router-dom";
import {Products} from "./Products";
import {Promo} from "./Promo";
import {Cart} from "./Cart";
import {Order} from "./Order";

export const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<>
          <Promo />
          <Products />
        </>} />

        <Route path="/cart" element={<>
          <Cart />
          <Order />
        </>} />

        <Route path="*" element={
          <h1 style={{paddingTop: "150px", textAlign: "center"}}>404</h1>
        } />
      </Routes>
    </main>
  );
};
