import React from 'react'
import FlexItems from './FlexItems'
import firstPhoto from '../images/flex-photo.svg'
import flePhotoOpac from '../images/flex-photo-opac.svg'

export default function SecondPage() {
  return (
    <div className='h-[400px] w-full bg-no-repeat bg-center bg-cover' style={{backgroundImage: `url(${firstPhoto})`}}>
      <div className='w-full h-full backdrop-blur-xl' style={{backgroundImage: `url(${flePhotoOpac})`}}>
        <FlexItems />
      </div>
    </div>
  )
}
