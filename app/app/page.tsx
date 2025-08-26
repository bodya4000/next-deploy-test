'use client'
import { useRef } from 'react'

export default function OpenApp() {
  const link = useRef<HTMLAnchorElement>(null)

  const handleClick = () => {
    if (link.current) {
      link.current.click()
    }
  }

  return (
    <div style={{ padding: 24 }}>
      {/* прихований лінк */}
      <a ref={link} href='myapp://list' style={{ display: 'none' }}>
        Hidden link
      </a>

      {/* кнопка для користувача */}
      <button onClick={handleClick}>Open myapp://list</button>
    </div>
  )
}
