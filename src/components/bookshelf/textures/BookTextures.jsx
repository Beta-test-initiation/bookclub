/**
 * Collection of book spine textures
 * Each texture creates a unique visual material for book spines
 */

export const BookTextures = {
  // Classic fabric texture with fine grain - BOLD
  fabric: (opacity = 0.35) => ({
    opacity,
    backgroundSize: '50px 50px',
    backgroundRepeat: 'repeat',
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><filter id="n"><feTurbulence baseFrequency="2.2" numOctaves="6" seed="2"/><feColorMatrix type="saturate" values="0"/></filter><rect width="300" height="300" filter="url(%23n)" fill="black"/></svg>')`
  }),

  // Leather texture with deeper grain - BOLD
  leather: (opacity = 0.45) => ({
    opacity,
    backgroundSize: '60px 60px',
    backgroundRepeat: 'repeat',
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><filter id="leather"><feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="8" seed="1"/><feColorMatrix type="saturate" values="0"/></filter><rect width="400" height="400" filter="url(%23leather)" fill="black"/></svg>')`
  }),

  // Linen texture - BOLD weave pattern
  linen: (opacity = 0.38) => ({
    opacity,
    backgroundSize: '40px 40px',
    backgroundRepeat: 'repeat',
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="350" height="350"><filter id="linen"><feTurbulence type="fractalNoise" baseFrequency="3.0" numOctaves="5" seed="3"/></filter><rect width="350" height="350" filter="url(%23linen)" fill="black"/></svg>')`
  }),

  // Canvas texture - BOLD coarse weave
  canvas: (opacity = 0.42) => ({
    opacity,
    backgroundSize: '45px 45px',
    backgroundRepeat: 'repeat',
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="380" height="380"><defs><pattern id="weave" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="rgba(0,0,0,0.3)"/><rect x="0" y="0" width="5" height="5" fill="rgba(255,255,255,0.4)"/><rect x="5" y="5" width="5" height="5" fill="rgba(255,255,255,0.4)"/></pattern></defs><rect width="380" height="380" fill="url(%23weave)"/><filter id="canvas"><feTurbulence baseFrequency="2.0" numOctaves="7"/></filter><rect width="380" height="380" filter="url(%23canvas)" fill="black" opacity="0.7"/></svg>')`
  }),

  // Velvet texture - BOLD soft grain
  velvet: (opacity = 0.30) => ({
    opacity,
    backgroundSize: '55px 55px',
    backgroundRepeat: 'repeat',
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="360"><filter id="velvet"><feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="9" seed="4"/><feColorMatrix type="saturate" values="0.1"/></filter><rect width="360" height="360" filter="url(%23velvet)" fill="black"/></svg>')`
  }),

  // Paper texture - BOLD fibrous texture
  paper: (opacity = 0.25) => ({
    opacity,
    backgroundSize: '48px 48px',
    backgroundRepeat: 'repeat',
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="340" height="340"><filter id="paper"><feTurbulence baseFrequency="4.0" numOctaves="6" seed="5"/></filter><rect width="340" height="340" filter="url(%23paper)" fill="black"/></svg>')`
  }),

  // Glossy - minimal but VISIBLE texture
  glossy: (opacity = 0.12) => ({
    opacity,
    backgroundSize: '52px 52px',
    backgroundRepeat: 'repeat',
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320"><filter id="glossy"><feTurbulence baseFrequency="5.0" numOctaves="3" seed="6"/></filter><rect width="320" height="320" filter="url(%23glossy)" fill="black"/></svg>')`
  }),

  // Rough cloth - HEAVILY textured and visible
  rough: (opacity = 0.50) => ({
    opacity,
    backgroundSize: '58px 58px',
    backgroundRepeat: 'repeat',
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420"><filter id="rough"><feTurbulence type="turbulence" baseFrequency="1.8" numOctaves="8" seed="7"/></filter><rect width="420" height="420" filter="url(%23rough)" fill="black"/></svg>')`
  })
}

/**
 * Get texture style by name
 * @param {string} textureName - Name of the texture (fabric, leather, etc.)
 * @param {number} opacity - Optional opacity override
 * @returns {object} Style object with texture properties
 */
export const getTexture = (textureName = 'fabric', opacity) => {
  const textureFunc = BookTextures[textureName] || BookTextures.fabric
  return textureFunc(opacity)
}
