import {Route, Routes} from "react-router-dom";
import {Products} from "./Products";
import {Promo} from "./Promo";

export const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<>
          <Promo />
          <Products />
        </>} />

        <Route path="/cart" element={<h1 style={{paddingTop: "150px", textAlign: "center"}}>Корзина</h1>} />

        <Route path="*" element={<h1 style={{paddingTop: "150px", textAlign: "center"}}>404</h1>} />
      </Routes>
    </main>
  );
};
