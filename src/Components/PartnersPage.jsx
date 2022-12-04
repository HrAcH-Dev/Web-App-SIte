import React from 'react'
import { PARTNER_DATA } from './data'
import styles from './style.module.css'

export default function PartnersPage() {
  return (
    <div className='w-full text-white mb-[162px]'>
      <div className='w-[60%] mx-auto text-center mb-[30px]'>
        <h1 className='text-[60px] font-extrabold leading-[73px]'>Partnerships</h1>
      </div>
      <div className={`mx-auto w-[80%] flex justify-center flex-wrap gap-[30px]  ${styles.fourth}`}>
        {PARTNER_DATA.map(elem => {
            return (
                <div className={`w-[250px] h-[94px] border-[3px] bg-[#fff]/[0.1]  flex  border-[#EE0BD7] rounded-[20px] ${styles.fourth}`} key={elem.id}>
                    <div className='w-full mb-[6px] flex justify-center items-center'>
                        <img src={elem.url} alt="icon" className='object-none' />
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}
