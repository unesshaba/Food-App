import React, { createContext, useState } from 'react'

const userProgressContext=createContext({
    progress:'', // cart, checkout
    showCart:()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},   
    hideCheckout:()=>{}   
});

export function UseProgressrContextProvider({children}){
    const [userProgress,setUserProgress]= useState('');

    function showCart() {
        setUserProgress('cart');
      }
    function hideCart(){
        setUserProgress('');
    }
    function showCheckout(){
        setUserProgress('checkout');
    }
    function hideCheckout(){
        setUserProgress('');
    }
    const userprogressCtx={
        progress:userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }
    return(<userProgressContext.Provider value={userprogressCtx}>{children}</userProgressContext.Provider>);
}

export default userProgressContext;