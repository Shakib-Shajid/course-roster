import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = card => {
    const newBookmarks = [...bookmarks, card];
    setBookmarks(newBookmarks);
  }

  return (
    <div className='md:max-w-7xl md:mx-auto my-4 md:my-12'>
      <h1 className='text-3xl font-bold text-center mb-4 md:mb-8'>Course Registration</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <Cards className="w-2/3" handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks className="w-1/3" bookmarks={bookmarks} />
      </div>
    </div>
  )
}

export default App
