import React, { createContext, useState } from 'react'
import { Route } from "react-router-dom";
import Products from './components/Products';
import Cart from './components/Cart';
import './styles.css'
import { data } from './data'

export const BooksContext = createContext();
function App() {
  const [state, setState] = useState({
    booklist: data,
    cart: []
  })

  const addToCart = (book) => {
    setState({
      ...state,
      cart: state.cart.find(cartItem => cartItem.id === book.id)
        ? state.cart.map(cartItem => cartItem.id === book.id ? {
          ...cartItem,
          count: cartItem.count + 1
        } : cartItem)
        : [...state.cart, { ...book, count: 1 }]

    })
  }
  const increaseBookCount = (book) => {
    setState({
      ...state,
      cart: state.cart.map(cartItem => cartItem.id === book.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem)
    })
  }
  const decreaseBookCount = (book) => {
    setState({
      ...state,
      cart: state.cart.map(cartItem => cartItem.id === book.id ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : cartItem.count = 1 } : cartItem)
    })
  }
  const removeBook = (book) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== book.id)
    })
  }

  return (
    <BooksContext.Provider value={{ state, addToCart, increaseBookCount, decreaseBookCount, removeBook }}>
      <div className='App'>
        <h1>Alışveriş Sepeti</h1>

        <Route exact path='/' component={Products} />
        <Route path='/cart' component={Cart} />

      </div>
    </BooksContext.Provider>
  )
}

export default App
