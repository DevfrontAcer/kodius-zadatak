import Main from "./Components/Main";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Data from "./Data";
import {useState} from "react";

function App() {
  const {produtcs}=Data;
  const [cartItems, setCartItems] = useState([]);


  const onAdd=(product)=>{
    const exist=cartItems.find(x=>x.id===product.id);
    if(exist){
      setCartItems(cartItems.map(x=>x.id===product.id ? {...exist, qty:exist.qty +1}:x));
    }else{
      setCartItems([...cartItems, {...product, qty:1}]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
     <Header/>
      <div className='row'>
        <Main onAdd={onAdd} products={produtcs}/>
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
      </div>
    </div>
  );
}

export default App;
