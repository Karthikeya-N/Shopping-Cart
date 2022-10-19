import React, { useState } from 'react';
import Navbar from './Components/Navbar.js';
import Amazon from './Components/Amazon.js';
import Cart from './Components/cart.js';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
      //console.log(item);
      if(cart.indexOf(item) !== -1) return;
      setCart([...cart, item]);
      //console.log(cart);
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].quantity += d;

    if(arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCart([...arr]);
  }

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (<Amazon handleClick={handleClick} />) : (<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>)}
    </React.Fragment>
  );
}

export default App;