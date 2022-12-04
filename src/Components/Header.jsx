import React from 'react'
import Container from './shared/Container'
import logo from '../images/logo.svg'
import styles from './style.module.css'
import arrowBottom from '../images/arrow-bottom.svg'

export default function Header() {
  return (
    <Container>
        <div className="col-span-full w-full pt-[55px] text-white flex justify-between items-center">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <ul className={`flex justify-evenly gap-[48px] h-[40px] text-[20px] font-normal ${styles.list}`}>
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
            </div>
            <button className='bg-[#FFF]/[.06] border-[3px] border-[#EE0BD7] hover:bg-[#EE0BD7] transition-all duration-100 block text-[20px] font-normal py-[10px] px-[41px] rounded-[57px]'>Login</button>
        </div>
    </Container>
  )
}
