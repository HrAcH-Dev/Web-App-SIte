import React from 'react'
import Container from './shared/Container'
import token from '../images/token.svg'
import shop from '../images/shop.svg'
import styles from './style.module.css'

export default function ProductPage() {
  return (
    <Container>
        <div className='col-span-6 mt-[8%] text-white relative'>
            <h1 className='pb-[20px] text-[60px] leading-[73px] font-extrabold'>Product, defined by it's customer</h1>
            <p className='text-[25px] pb-[56px] leading-[30px] font-normal pr-[25px]'>wanted is a web3 social app created for discovery. you tell us what you’re interested in, and we help you find others to share your interests.</p>
            <button className='flex justify-center mb-[260px] pt-[9px] h-[56px] gap-[12px] border-[3px] border-[#EE0BD7] rounded-[57px]'>
                <img src={shop} alt="shop" className='ml-[42px] w-[24px] h-[24px] text-[30px]' width="24px" height="24px" />
                <p className={`text-[25px] font-normal leading-[30px] pr-[35px] rounded-[57px] ${styles.textGradient}`}>Buy unix token</p>
            </button>
            <div className={`w-[300px] h-[300px] rounded-full  blur-[140px] -z-10 absolute bottom-[8%] left-[-12%] ${styles.filter}`} />
        </div>
        <div className='col-start-7 col-span-6 relative'>
            <img src={token} alt="token" className='absolute top-[17%] right-[8%] lg:static ' />
            <div className={`w-[300px] h-[300px] rounded-full  blur-[140px] -z-10 absolute bottom-[38%] lg:right-[9%] right-[-5%]  ${styles.filter}`} />
        </div>
    </Container>
  )
}
