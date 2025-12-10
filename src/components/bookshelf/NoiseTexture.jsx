/**
 * Noise texture component - adds visual grain to book surfaces
 * Based on Framer Noise component
 */
export const NoiseTexture = ({ opacity = 0.06, backgroundSize = 150 }) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        backgroundSize: `${backgroundSize}px ${backgroundSize}px`,
        backgroundRepeat: 'repeat',
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150"><filter id="n"><feTurbulence baseFrequency="0.9" numOctaves="3"/></filter><rect width="150" height="150" filter="url(%23n)" opacity="0.5"/></svg>')`
      }}
    />
  )
}
