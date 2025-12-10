import { useState } from 'react'
import { Book } from './bookshelf/Book'
import booksData from '../data/books.json'

/**
 * BookShelf2D - Main bookshelf component displaying books in a row
 * Each book rotates on hover to reveal its cover
 */
export const BookShelf2D = ({ onBookSelect }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#E60023] overflow-hidden">
      {/* Horizontal container for books */}
      <div className="flex gap-5 items-center justify-center">
        {booksData.map((book, index) => (
          <Book
            key={book.id}
            book={book}
            isHovered={hoveredIndex === index}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => onBookSelect(book)}
            delay={index * 0.03}
          />
        ))}
      </div>
    </div>
  )
}
