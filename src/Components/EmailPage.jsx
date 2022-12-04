import React from 'react'
import Container from '../Components/shared/Container'
import join from '../images/join.svg'
import styles from './style.module.css'

export default function EmailPage() {
  return (
    <Container>
        <div className='mb-[250px] col-span-full flex justify-center border-[7px] bg-[#fff]/[0.1] border-[#EE0BD7] rounded-[38px]'>
            <div className='text-white w-[53%] pt-[113px] pl-[62px]'>
                <h1 className='text-[60px] font-enxtrabold leading-[73px] pb-[10px]'>Get unix gaming updates.</h1>
                <p className='text-[25px] font-normal leading-[30px] pb-[52px]'>when it comes to partnering new blockchain games, we only want to partner with project of class,continue to drive the future evolution of blockchaining games.</p>
                <div className='h-[74px] mb-[107px] bg-[#fff]/[0.1] border-[4px] border-[#EE0BD7] rounded-[75px] flex justify-between'>
                    <input type="text" className='h-full  rounded-[75px] w-full placeholder:text-[33px] bg-transparent placeholder:font-normal placeholder:text-white placeholder:leading-[40px] placeholder:pl-[54px] pt-[6px]' placeholder='Your email here' />
                    <button className='bg-[#fff]/[0.2] h-full rounded-[75px] flex items-center px-[54px] outline outline-offset-[1px] hover:bg-[#EE0BD7] transition-all duration-100 outline-[#EE0BD7] text-[33px] font-normal leading-[40px]'>Submit</button>
                </div>
                
            </div>
            <div className='w-[47%] pl-[130px] mt-[98px] relative'>
                <img src={join} alt="join" />
                <div className={`w-[300px] h-[300px] rounded-full blur-[126px] -z-10 absolute right-[-33%] top-[-23%] ${styles.filter}`} />
            </div>
        </div>
    </Container>
  )
}
