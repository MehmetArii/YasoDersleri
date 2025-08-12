import React from 'react';
import styles from '@/styles/Header.module.scss';
import Image from "next/image";
import { FaInstagram,FaGithub,FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}><Image src="/next.svg" alt="Logo" width={80} height={20} /></div>
      <div className={styles.center}><h1>Ana Sayfa</h1></div>
      <div className={styles.social}>
        <a href="https://www.instagram.com/memt.ari/"
        target="_blank" rel="noopener noreferrer"><FaInstagram size={24} color="red"/></a>
        <a href="https://github.com/MehmetArii"
        target="_blank" rel="noopener noreferrer"><FaGithub size={24} color='black'/></a>
        <a href="https://www.linkedin.com/in/mehmet-ar%C4%B1-727200224/"
        target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} color='blue'/></a>
      </div>
    </header>
  );
};

export default Header;
