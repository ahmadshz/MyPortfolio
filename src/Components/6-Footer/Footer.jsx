import './Footer.css'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer >
            <div className='footer-container'>
                    <a className='location' href='https://github.com/ahmadshz'>
                        <div className='icons-footer'>
                            <FaGithub />
                        </div>
                    </a>
                    <a className='numbers' href='https://wa.me/96181281216'>
                        <div className='icons-footer'>
                            <FaWhatsapp />
                        </div>
                    </a>
                    <a className='email' href='mailto:shmeitahmad3@gmail'>
                        <div className='icons-footer'>
                            <AiOutlineMail />
                        </div>
                    </a>
                </div>
        </footer>
    )
}

export default Footer
