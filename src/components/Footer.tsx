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
    <footer id = "footer" className={s.footer}>
      <div className={s.container}>
        <div className={s.social}>
          <a href="https://www.instagram.com/_conexioncultural_" target="_blank" rel="noopener noreferrer" className={s.logoLink} arial-label="Instagram">
            <Image src="/Instagram.png" alt="Instagram" width={60} height={60}/>
          </a>

          <a href= "tel:+573132416840" target ="_blank" rel="noopener noreferrer" className={s.logoLink} arial-label="WhatsApp">
            <Image src="/WhatsApp.png" alt="Whatsapp" width={60} height={60}/>
          </a>
        </div>

        <div className={s.brand}>
        <a href="https://exacol.github.io/ExaPages/" target="_blank" rel="noopener noreferrer" className={s.logoLink} arial-label="Exa">
          <Image src="/ExaBlack.png" alt="Exa" width={70} height={32}/>
        </a>
        </div>
        <div className={s.bottom}>
          <small>© {year} Exa. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
}
