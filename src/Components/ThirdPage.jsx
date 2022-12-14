import React from 'react'
import EmailPage from './EmailPage'
import FaqItem from './FaqItem'
import Footer from './Footer'
import PartnersPage from './PartnersPage'
import ProductPage from './ProductPage'

export default function ThirdPage() {
  return (
    <div className='bg-gradient-to-l w-full pb-[25px] pb-[266px]  from-stone-900 to-stone-800 backdrop-blur-[168px]'>
        <div className=' w-full text-white flex justify-center flex-wrap'>
            <div className='w-[49%] text-center mt-[80px]'>
                <h1 className='text-[60px] pb-[20px] font-extrabold leading-[73px]'>The unix ecosystem</h1>
                <p className='text-[25px] font-normal leading-[30px]'>wanted is a web3 social app created for discovery. you tell us what you'are interested in, and we help you find others to share your interests.</p>
            </div>
        </div>
        <FaqItem />
        <ProductPage />
        <PartnersPage />
        <EmailPage />
        <Footer />
    </div>
  )
}
