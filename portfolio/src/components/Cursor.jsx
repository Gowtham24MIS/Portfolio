import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    // Hide on mobile
    if (window.innerWidth < 768) {
      cursor.style.display = 'none'
      follower.style.display = 'none'
      document.body.style.cursor = 'auto'
      return
    }

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`
    }

    const animate = () => {
      followerX += (mouseX - followerX - 20) * 0.1
      followerY += (mouseY - followerY - 20) * 0.1
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`
      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => follower.classList.add('hovered')
    const onLeave = () => follower.classList.remove('hovered')

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    window.addEventListener('mousemove', onMove)
    addListeners()
    raf = requestAnimationFrame(animate)

    // Re-add for dynamic elements
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={followerRef} className="cursor-follower hidden md:block" />
    </>
  )
}
