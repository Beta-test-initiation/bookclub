import { getTexture } from './textures/BookTextures'

/**
 * Book cover component - the front face that rotates into view on hover
 * Based on Framer Book component specifications
 */
export const BookCover = ({ title, author, color, isHovered, texture = 'fabric' }) => {
  const textureStyle = getTexture(texture)

  // Determine if the color is light or dark for text contrast
  const isLightColor = (hexColor) => {
    const hex = hexColor.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return luminance > 0.6
  }

  const textColor = isLightColor(color) ? 'rgb(13, 13, 13)' : 'rgb(255, 255, 255)'
  const authorColor = isLightColor(color) ? 'rgba(13, 13, 13, 0.75)' : 'rgba(255, 255, 255, 0.90)'

  return (
    <div
      className="absolute top-0 overflow-hidden"
      style={{
        width: '200px',
        height: '267px',
        left: '44px', // Position at the right edge of the spine (spine is 44px wide)
        transform: 'rotateY(90deg)',
        transformOrigin: 'left center',
        zIndex: 1,
        backgroundColor: color
      }}
    >
      {/* Book title and author on cover */}
      <div
        className="absolute inset-0 flex flex-col justify-between z-20"
        style={{
          paddingTop: '20px',
          paddingRight: '20px',
          paddingBottom: '20px',
          paddingLeft: '32px' // Extra padding on left to clear the binding indentation
        }}
      >
        <div>
          <h3
            className="font-bold leading-[1.15] mb-3 tracking-tight"
            style={{
              color: textColor,
              fontSize: title.length > 25 ? '1.35rem' : '1.65rem',
              fontFamily: '"Crimson Pro", "Georgia", serif',
              fontWeight: '700',
              letterSpacing: '-0.02em'
            }}
          >
            {title}
          </h3>
          <p
            className="text-sm tracking-wide"
            style={{
              color: authorColor,
              fontFamily: '"Inter", sans-serif',
              fontWeight: '400',
              fontSize: '0.8rem',
              letterSpacing: '0.02em'
            }}
          >
            {author}
          </p>
        </div>
      </div>

      {/* Texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[8]"
        style={textureStyle}
      />

      {/* Binding indentation - the groove along the spine edge */}
      <div
        className="absolute top-0 bottom-0 z-[12]"
        style={{
          left: '12px',
          width: '10px',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.1) 60%, transparent 100%)',
          boxShadow: 'inset 3px 0 4px rgba(0, 0, 0, 0.35)'
        }}
      />

      {/* Subtle highlight on the binding edge */}
      <div
        className="absolute top-0 bottom-0 z-[13]"
        style={{
          left: '21px',
          width: '1.5px',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.12) 15%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.12) 85%, transparent 100%)'
        }}
      />
    </div>
  )
}
