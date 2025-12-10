import { motion } from 'framer-motion'
import { BookSpine } from './BookSpine'
import { BookCover } from './BookCover'

/**
 * Individual book component with 3D rotation on hover
 * Combines spine and cover with proper 3D transforms
 */
export const Book = ({ book, isHovered, onHoverStart, onHoverEnd, onClick, delay = 0 }) => {
  const transition = {
    type: 'spring',
    stiffness: 500,
    damping: 60,
    mass: 1
  }

  return (
    <motion.div
      className="flex-none cursor-pointer overflow-visible"
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1200
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        width: isHovered ? '235px' : '44px' // Expands width when hovered to make room for cover
      }}
      transition={{
        ...transition,
        delay
      }}
    >
      {/* Book container with 3D transform */}
      <motion.div
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          transformPerspective: 1200,
          width: 'min-content',
          height: 'min-content'
        }}
        animate={{
          rotateY: isHovered ? -75 : 0
        }}
        transition={transition}
      >
        {/* Spine (visible when closed) */}
        <BookSpine title={book.title} color={book.coverColor} texture={book.texture} />

        {/* Cover (rotates into view on hover) */}
        <BookCover
          title={book.title}
          author={book.author}
          color={book.coverColor}
          isHovered={isHovered}
          texture={book.texture}
        />
      </motion.div>
    </motion.div>
  )
}
