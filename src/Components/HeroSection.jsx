import React from 'react'
import Container from './shared/Container'
import heroPeople from '../images/hero-people.svg'

export default function HeroSection() {
  return (
    <Container>
        <div className="col-span-full  text-white flex justify-start  relative">
            <div className='w-[70%] mt-[97px]'>
                <h1 className="text-[100px] leading-[122px] mb-[14px] font-extrabold">Kickstart your web3 game</h1>
                <div className='w-[60%]'>
                    <p className='text-[20px] leading-[30px]'>unix gaming provides what all games need to succed: gamers, technology & funding </p>
                </div>
                <button className='tex-[30px] mb-[30px] font-medium leading-[36px] bg-gradient-to-r from-purple-500 to-pink-500 py-[21px] px-[33px] mt-[59px] rounded-[40px]'>Kickstart my game</button>
            </div>
            <div className='w-[59%] absolute lg:-top-[4%] lg:-right-[9%] md:bottom-[33%] md:left-[45%]'>
                <img src={heroPeople} alt="people" />
            </div>
        </div>
    </Container>
  )
}
