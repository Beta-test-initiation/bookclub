import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import booksData from '../data/books.json'

export const useThreeScene = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0B2B26)

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )
    camera.position.z = 10

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.domElement.style.display = 'block'
    containerRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Create books from JSON data
    const books = []
    const spacing = 1.5

    booksData.forEach((bookData, index) => {
      const geometry = new THREE.BoxGeometry(0.8, 3.5, 2.5)
      const material = new THREE.MeshStandardMaterial({
        color: bookData.coverColor,
        roughness: 0.5,
        metalness: 0.1
      })
      const mesh = new THREE.Mesh(geometry, material)

      // Position books in a line
      const xPosition = (index - booksData.length / 2) * spacing + spacing / 2
      mesh.position.set(xPosition, 0, 0)
      mesh.userData = {
        defaultZ: 0,
        targetZ: 0,
        bookData: bookData
      }

      books.push(mesh)
      scene.add(mesh)
    })

    // Raycaster for hover detection
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2(-999, -999)
    let hoveredBook = null

    // Mouse move handler
    const handleMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(books)

      if (intersects.length > 0) {
        const newHoveredBook = intersects[0].object
        if (hoveredBook !== newHoveredBook) {
          // Reset previous hovered book
          if (hoveredBook) {
            hoveredBook.userData.targetZ = hoveredBook.userData.defaultZ
          }
          // Set new hovered book
          hoveredBook = newHoveredBook
          hoveredBook.userData.targetZ = 2
          renderer.domElement.style.cursor = 'pointer'
        }
      } else {
        // No book hovered
        if (hoveredBook) {
          hoveredBook.userData.targetZ = hoveredBook.userData.defaultZ
          hoveredBook = null
          renderer.domElement.style.cursor = 'default'
        }
      }
    }

    // Wheel handler for horizontal scrolling
    const handleWheel = (event) => {
      event.preventDefault()
      camera.position.x += event.deltaY * 0.01
      // Clamp camera position
      const maxScroll = (booksData.length * spacing) / 2
      camera.position.x = Math.max(-maxScroll, Math.min(maxScroll, camera.position.x))
    }

    // Add event listeners
    renderer.domElement.addEventListener('mousemove', handleMouseMove)
    renderer.domElement.addEventListener('wheel', handleWheel, { passive: false })

    // Animation loop
    function animate() {
      requestAnimationFrame(animate)

      // Smooth animation for books pulling out
      books.forEach(book => {
        book.position.z += (book.userData.targetZ - book.position.z) * 0.1
      })

      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.domElement.removeEventListener('wheel', handleWheel)
      renderer.domElement.removeEventListener('mousemove', handleMouseMove)
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return { containerRef }
}
