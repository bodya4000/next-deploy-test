'use client'
import { useEffect } from 'react'

export default function OpenAppPage() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor

    const deepLink = 'myapp://open' 
    window.location.href = deepLink

    const timer = setTimeout(() => {
      if (/android/i.test(userAgent)) {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.myapp'
      } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        window.location.href = 'https://apps.apple.com/app/id1234567890'
      } else {
        window.location.href = '/'
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return <p>Opening app...</p>
}
