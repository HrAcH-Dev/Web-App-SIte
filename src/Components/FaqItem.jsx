import React from 'react'
import Container from './shared/Container'
import gamePeople from '../images/game-people.svg'
import arrow from '../images/arrow.svg'
import { FAQ_ITEMS } from './data'
import styles from './style.module.css'

export default function FaqItem() {
  return (
    <Container>
        <div className={`col-span-6 relative mb-[103px]`}>
            <img src={gamePeople} alt=""/>
            <div className={`w-[300px] h-[300px] rounded-full blur-[126px] -z-10 absolute right-[17%] bottom-[-10%] ${styles.filter}`} />
        </div>
        <div className='col-span-6 mt-[63px]'>
            {FAQ_ITEMS.map(elem => {
                return (
                    <div className='cursor-pointer w-full border-b-[1px] border-[#fff]/[0.20] py-[20px] text-white flex justify-start items-center'>
                        <img src={arrow} alt="arrow" className="ml-[15px]" />
                        <h2 className="ml-[32px] text-[30px] leading-[36px] font-normal">{elem.title}</h2>
                    </div>
                )
            })}
        </div>
    </Container>
  )
}
