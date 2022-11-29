import React, { useRef } from "react";
import Header from "./containers/header";
import Product from "./containers/product";
import Posts from "./containers/posts";
import Order from "./containers/order";
import Footer from "./containers/footer";






//--------------------------------------------- НАПОМИНАЛКА -----------------------------------------------------------
// Все блоки в папке containers. НЕ ЗАБУДЬ что есть вложенные блоки из папки components в блоки которые в containers!!!
//---------------------------------------------------------------------------------------------------------------------


function App() {
  


// Ниже функция для перемещения по кнопкам "Заказать"
//---------------------------------------------------
  
  
  const productRef = useRef(null);
  const orderRef = useRef(null);

  const handleProductScroll = () => {
    productRef.current.scrollIntoView({behavior: "smooth", block : "center"})
  }

   const handleOrderScroll = () => {
    orderRef.current.scrollIntoView({behavior: "smooth", block : "center"})
  }


  //---------------------------------------------------------------------------------------
  // Сначчала сделал на сдвиг с Хэдэра на Продукт, а потом с Продукта на Ордер через ref={}
  //---------------------------------------------------------------------------------------

  return (
    <div>
      <Header handleProductScroll={handleProductScroll}></Header>
      <Product ref={productRef} handleOrderScroll={handleOrderScroll}></Product>
      <Posts></Posts>
      <Order ref={orderRef}></Order>
      <Footer></Footer>
    </div>
  );
};

export default App;
