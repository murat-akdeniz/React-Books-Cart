import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BooksContext } from '../App'
const Cart = () => {
  const context = useContext(BooksContext)
  const increaseBookCount = (book) => {
    context.increaseBookCount(book);
  }
  const decreaseBookCount = (book) => {
    context.decreaseBookCount(book);
  }
  const removeBook = (book) => {
    context.removeBook(book);
  }
  const totalCartAmount = context.state.cart.reduce((total, item) => total + (item.price * item.count), 0).toFixed(2)
  const totalCartItems = context.state.cart.reduce((total, item) => total + item.count, 0)
  console.log('mycarddd..: ', totalCartAmount);
  return (
    <div>
      <h2>
        <Link to='/'>Kitap Listesi</Link>
        <span>Sepetim({totalCartItems})</span>
      </h2>
      <h3>Toplam Sepet Tutarı: &#8378;{totalCartAmount}</h3>
      {context.state.cart.length < 1 ? 'Sepetinizde hiç kitap yok!'
        : context.state.cart.map(book => (
          <div className='book' key={book.id}>
            <img src={book.image} alt={book.name} />
            <div>
              <h4>{book.name}</h4>
              <p>Yazar: {book.author}</p>
              <p>Fiyat: ₺{book.price}</p>
              <p>Toplam: ₺{(book.price * book.count).toFixed(2)}</p>
              <p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
              <button onClick={() => decreaseBookCount(book)}>-</button>
              <button onClick={() => removeBook(book)}>Sepetten Çıkar</button>
              <button onClick={() => increaseBookCount(book)}>+</button>
            </div>
          </div>
        ))}


    </div>
  )
}

export default Cart
