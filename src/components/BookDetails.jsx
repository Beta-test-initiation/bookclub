import { useEffect } from 'react'
import booksData from '../data/books.json'

export const BookDetails = ({ selectedBook, onClose }) => {
  const book = selectedBook !== null ? booksData[selectedBook] : null

  useEffect(() => {
    // Close modal on escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!book) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cream via-sky-light to-sky-pale rounded-xl shadow-2xl animate-slideUp border border-white/30">
        {/* Decorative top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-dark via-forest-mid to-transparent rounded-t-xl" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-forest-mid to-forest-dark text-cream rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300 group"
          aria-label="Close"
        >
          <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-12 space-y-8">
          {/* Book Header - Editorial Style */}
          <div className="space-y-4">
            {/* Book cover color block with depth */}
            <div
              className="w-full h-72 rounded-xl shadow-xl transition-transform duration-300 hover:shadow-2xl"
              style={{
                backgroundColor: book.coverColor,
                backgroundImage: `linear-gradient(135deg, ${book.coverColor}00 0%, ${book.coverColor}40 100%)`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)`
              }}
            />
            <div>
              <h1 className="text-5xl md:text-6xl font-display text-forest-dark mb-3 leading-tight">
                {book.title}
              </h1>
              <p className="text-2xl text-mist-dark font-editorial italic font-light">
                {book.author}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-forest-mid/30 to-transparent" />

          {/* Remarks Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-display text-forest-dark tracking-tight">
              Why I Loved This
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 font-body whitespace-pre-wrap hyphens-auto">
              {book.remarks}
            </p>
          </section>

          {/* Quotes Section */}
          <section className="space-y-5">
            <h2 className="text-3xl font-display text-forest-dark tracking-tight">
              Favorite Moments
            </h2>
            <div className="space-y-5">
              {book.quotes.map((quote, idx) => (
                <blockquote
                  key={idx}
                  className="relative pl-6 py-5 border-l-3 border-forest-mid bg-gradient-to-r from-sky-pale to-transparent rounded-r-lg italic text-gray-800 font-editorial text-lg leading-relaxed transition-all duration-300 hover:border-l-forest-dark hover:bg-gradient-to-r hover:from-sky-light hover:to-transparent"
                >
                  {quote}
                </blockquote>
              ))}
            </div>
          </section>

          {/* Spacer for scrolling */}
          <div className="h-4" />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
