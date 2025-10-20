/*
Developed by EXA
Version 1.0
Footer Component
*/

import Image from 'next/image';
import s from '@/styles/Footer.module.css';


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer}>
        

      <div className="container">
<a href="https://www.instagram.com/_conexioncultural_" target="_blank" rel="noopener noreferrer" className={s.logoLink} arial-label="Instatgram">
          <Image src="/Instagram.png" alt="Instagram" width={60} height={60}/>
        </a>

        <a href= "tel:+573180652524" target ="_blank" rel="noopener noreferrer" className={s.logoLink} arial-label="WhatsApp">
          <Image src="/WhatsApp.png" alt="WHatsapp" width={60} height={60}/>
        </a>

        <div className={s.brand}>
        <a href="https://exacol.github.io/ExaPages/" target="_blank" rel="noopener noreferrer" className={s.logoLink} arial-label="Exa">
          <Image src="/ExaBlack.png" alt="Exa" width={60} height={28}/>
        </a>
        </div>
        <div className={s.bottom}>
          <small>© {year} Exa. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
}
