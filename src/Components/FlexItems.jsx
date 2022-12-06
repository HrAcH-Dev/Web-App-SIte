import React from 'react'
import { DESIGN_ITEM } from './data'
import Container from './shared/Container'

export default function FlexItems() {
  return (
    <Container>
        <div className='col-span-full w-full flex justify-evenly flex-wrap gap-[0px] lg:gap-[61px] items-center'>
        {DESIGN_ITEM.map(elem => {
            return (
                <div className='rounded-[20px] bg-[#fff]/[0.1] border-[3px] border-[#EE0BD7] relative  mb-[40px] mt-[40px] lg:mt-[72px] lg:mb-[72px] flex justify-center  gap-[0px] items-center flex-wrap w-[255px] text-white h-[255px]' key={elem.id}>
                    <div className='absolute top-[22px] right-[33px] flex justify-end items-start'>
                            <span className='bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg py-[9px] px-[18px]'>
                                <p className='text-[20px] font-medium leading-[24px ]'>11.2K</p>
                            </span>
                        </div>
                    <div className='text-center w-[95%]'>
                        <img src={elem.url} alt={elem.alt} className="inline object-cover" />
                    </div>
                    <h2 className='absolute bottom-[9%] text-[30px] leading-[36px] font-medium'>{elem.title}</h2>
                </div>
            )
        })}
        </div>
    </Container>
  )
}
