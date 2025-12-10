import { useState } from 'react'
import { BookShelf2D } from './components/BookShelf2D'
import { BookDetails } from './components/BookDetails'
import './styles/globals.css'

function App() {
  const [selectedBook, setSelectedBook] = useState(null)

  const handleBookSelect = (bookData) => {
    // bookData is the full book object
    setSelectedBook(bookData)
  }

  const handleCloseModal = () => {
    setSelectedBook(null)
  }

  return (
    <div className="relative w-full h-screen">
      {/* 2D BookShelf */}
      <BookShelf2D onBookSelect={handleBookSelect} />

      {/* Book Details Modal */}
      {selectedBook !== null && (
        <BookDetails selectedBook={selectedBook} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default App
