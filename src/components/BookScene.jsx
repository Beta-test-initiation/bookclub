import { useThreeScene } from '../hooks/useThreeScene'

export const BookScene = () => {
  const { containerRef } = useThreeScene()

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'auto',
        cursor: 'pointer',
      }}
    />
  )
}
