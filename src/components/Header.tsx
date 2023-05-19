import React from 'react'
import { Link } from 'react-scroll/modules';
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import Logo from './images/logo.svg'

const Header = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div >
        <Link activeClass='active' to="home" spy={true} smooth={true} offset={0} duration={500}><Image src={Logo} alt="Logo"  width={40} height={40} /></Link>
        </div>
        <div>
          <Link activeClass='active' to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link>
          <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
          <Link activeClass='active' to="contactform" spy={true} smooth={true} offset={-50} duration={500}>Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header