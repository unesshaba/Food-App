import React, { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext';
import userProgressContext from '../store/UserProgressContext';
export default function Header() {
  const cartCtx=useContext(CartContext);
  const userProgressCtx = useContext(userProgressContext);
  const totalCartItem=cartCtx.items.reduce((totalNumberOfItems,item)=>{
    return totalNumberOfItems+=item.quantity;
  },0)
  function handleShowCart(){
    userProgressCtx.showCart(); 
  }
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logoImg} alt='A restaurant'/>
            <h1>YounessFood</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}> Cart ({totalCartItem})</Button>
        </nav>

    </header>
  )
}
