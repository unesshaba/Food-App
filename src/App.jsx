import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import {CartContextProvider} from "./store/CartContext";
import { UseProgressrContextProvider } from "./store/UserProgressContext";
function App() {
  return (
    <UseProgressrContextProvider>
    <CartContextProvider>
      <Header/>
      <Meals/>
      <Cart />
      <Checkout /> 
    </CartContextProvider>
    </UseProgressrContextProvider>
  );
}

export default App;
