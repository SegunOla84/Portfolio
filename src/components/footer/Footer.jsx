import React from 'react'
import './footer.css'
import{FaFacebook} from 'react-icons/fa'
import{BsInstagram} from 'react-icons/bs'
import{GrTwitter} from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='footer'>
      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#service'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com'><FaFacebook/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://twitter.com'><GrTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Segun Olatunbosun. All Rights Reserved.</small>
      </div>
    </div>
  )
}

export default Footer