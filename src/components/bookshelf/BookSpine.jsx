import { getTexture } from './textures/BookTextures'

/**
 * Book spine component - the narrow side visible when book is closed
 * Dimensions and styling based on Framer Book component
 */
export const BookSpine = ({ title, color, texture = 'fabric' }) => {
  const textureStyle = getTexture(texture)

  return (
    <div
      className="relative overflow-hidden flex flex-col items-center justify-start"
      style={{
        width: '44px',
        height: '267px',
        paddingTop: '10px'
      }}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={textureStyle}
      />

      {/* Background color (darkened for spine) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: color,
          filter: 'brightness(0.75)',
          WebkitFilter: 'brightness(0.75)'
        }}
      />

      {/* Subtle edge shadows for depth */}
      <div
        className="absolute top-0 left-0 bottom-0 w-[2px]"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.3), transparent)',
          zIndex: 5
        }}
      />
      <div
        className="absolute top-0 right-0 bottom-0 w-[2px]"
        style={{
          background: 'linear-gradient(to left, rgba(0, 0, 0, 0.15), transparent)',
          zIndex: 5
        }}
      />

      {/* Title on spine - rotated 90 degrees */}
      <div className="relative z-20 flex items-center justify-center min-h-[121px] w-[1px]">
        <p
          className="absolute text-white font-semibold text-center whitespace-pre pointer-events-none"
          style={{
            transform: 'rotate(90deg)',
            transformOrigin: 'center',
            color: 'white',
            fontSize: '0.7rem',
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '0.03em',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
          }}
        >
          {title}
        </p>
      </div>
    </div>
  )
}
