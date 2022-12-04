import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import heroPhotoOpac from '../images/hero-photo-opac.svg'
import heroPhoto from '../images/hero-photo.svg'

export default function FirstPage() {
  return (
    <div className="w-full h-[750px] backdrop-blur-xl bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${heroPhoto})`}}>
      <div className="w-full h-full backdrop-blur-xl" style={{backgroundImage: `url(${heroPhotoOpac})`}}>
        <Header />
        <HeroSection />
      </div>
    </div>
  )
}
