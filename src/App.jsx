import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);
  const [remaining, setRemaining] = useState(20)

  const handleAddToBookmark = (card, credit, price) => {
    const a = [...bookmarks]
    const newBookmarks = [...bookmarks, card];

    if (a.includes(card)) {
      alert('not allow');
      return;
    }

    setBookmarks(newBookmarks);
    handleCredit(credit);
    handlePrice(price);
    handleRemaining(credit);
  }

  const handleCredit = (time) => {
    const newCredit = credit + time;
    setCredit(newCredit);
  }

  const handlePrice = taka => {
    const newPrice = price + taka;
    setPrice(newPrice);
  }

  const handleRemaining = time => {
    const newRemaining = remaining - time;
    setRemaining(newRemaining);

  }




  return (
    <div className='md:max-w-7xl md:mx-auto my-4 md:my-12'>
      <h1 className='text-3xl font-bold text-center mb-4 md:mb-8'>Course Registration</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <Cards className="w-2/3" handleAddToBookmark={handleAddToBookmark} handleCredit={handleCredit} handleRemaining={handleRemaining} />
        <Bookmarks className="w-1/3" bookmarks={bookmarks} credit={credit} price={price} remaining={remaining} />
      </div>
    </div>
  )
}

export default App
