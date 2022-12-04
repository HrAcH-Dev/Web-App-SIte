import React from 'react'
import Container from '../Components/shared/Container'
import footerLogo from '../images/footer-logo.svg'
import facebookIcon from '../images/facebook-icon.svg'
import instagramIcon from '../images/instagram-icon.svg'
import whatsappIcon from '../images/whatsapp-icon.svg'
import styles from './style.module.css'

export default function Footer() {
  return (
    <Container>
        <div className='col-span-4 col-start-5 w-[85%] relative'>
            <div className='mb-[41px]'>
                <img src={footerLogo} alt="footer-logo" />                
            </div>
            <div className={`flex justify-center gap-[30px] ${styles.divs}`}>
                <div>
                    <img src={whatsappIcon} alt="whatsapp" />
                </div>
                <div>
                    <img src={instagramIcon} alt="instagram" />
                </div>
                <div>
                    <img src={facebookIcon} alt="facebook" />
                </div>
            </div>
            <div className={`w-[300px] h-[300px] rounded-full blur-[160px] -z-10 absolute left-[-100%] bottom-[-23%] ${styles.filter}`} />
        </div>
    </Container>
  )
}
