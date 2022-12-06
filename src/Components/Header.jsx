import React, { useState } from 'react'
import Container from './shared/Container'
import logo from '../images/logo.svg'
import styles from './style.module.css'
import arrowBottom from '../images/arrow-bottom.svg'

export default function Header() {
  const [show, setShow] = useState(false)

  const handleToogle = () => {
    setShow(!show)
  }

  return (
    <Container>
        <div className="col-span-full w-full pt-[55px] text-white flex justify-between items-center">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <ul className={`hidden lg:flex justify-evenly gap-[48px] h-[40px] text-[20px] font-normal ${styles.list}`}>
                    <li>Home</li>
                    <li>
                        Products
                        <img src={arrowBottom} alt='arrow' />
                    </li>
                    <li>
                        Buy unix token
                        <img src={arrowBottom} alt='arrow' />
                    </li>
                    <li>
                        Community
                        <img src={arrowBottom} alt='arrow' />
                    </li>
                </ul>
                <div className='lg:hidden block  w-[50px] h-[50px]' onClick={handleToogle}>
                    <div className={`w-[40px] h-[4px] bg-[#EE0BD7] mb-[16px] transition-all duration-300 ${show ? 'translate-y-[10px] rotate-[45deg]' : 'translate-y-0'}`} />
                    <div className={`w-[40px] h-[4px] bg-[#EE0BD7] transition-all duration-300 ${show ? 'translate-y-[-10px] -rotate-[45deg]' : 'translate-y-0'}`} />
                </div>
            </div>
            <button className='hidden lg:block bg-[#FFF]/[.06] border-[3px] border-[#EE0BD7] hover:bg-[#EE0BD7] transition-all duration-100 block text-[20px] font-normal py-[10px] px-[41px] rounded-[57px]'>Login</button>
        </div>
    </Container>
  )
}
