'use client'
import React, { useEffect, useState } from 'react'

const CookieBanner = () => {

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const userConsent = localStorage.getItem('sva0cc')
    if (!userConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = (e) => {
    localStorage.setItem('sva0cc', {opt:'001acp'})
    setShowBanner(false)
  }

  const handleDecline = (e) => {
    localStorage.setItem('sva0cc', {opt:'001acp'});
    setShowBanner(false);
  }

  if (!showBanner) return null

  return (
    <div className='cookie-banner'>
        <p>
            Usamos cookies para asegurarnos que tengas la mejor experiencia posible. <a href="/policy">Más información.</a>
        </p>
        <div className="banner-btns">
          <button onClick={handleAccept}>Aceptar todas</button>
          <button onClick={handleDecline}>Rechazar todas</button>
        </div>
    </div>
  )
}

export default CookieBanner