import { useState } from 'react'
import { BookScene } from './components/BookScene'
import { BookDetails } from './components/BookDetails'
import './styles/globals.css'

function App() {
  const [selectedBook, setSelectedBook] = useState(null)

  const handleBookSelect = (bookIndex) => {
    setSelectedBook(bookIndex)
  }

  const handleCloseModal = () => {
    setSelectedBook(null)
  }

  return (
    <div className="relative w-full h-screen">
      {/* Ghibli Background - Disabled for now */}
      {/* <GhibliBackground /> */}

      {/* Three.js Book Scene */}
      <BookScene onBookSelect={handleBookSelect} />

      {/* Book Details Modal */}
      {selectedBook !== null && (
        <BookDetails selectedBook={selectedBook} onClose={handleCloseModal} />
      )}

      {/* Scroll indicator - appears at top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-dark via-forest-mid to-transparent z-40" />
    </div>
  )
}

export default App
