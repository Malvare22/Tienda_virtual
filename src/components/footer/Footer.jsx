import FooterCSS from './Footer.module.css';
import Logo from '/src/assets/svg/logo.svg';
import Facebook from '/src/assets/svg/facebook.svg';
import Instagram from '/src/assets/svg/instagram.svg';
import Linkedin from '/src/assets/svg/linkedin.svg';
import Whatsapp from '/src/assets/svg/whatsapp.svg';

function Footer() {

  return (
    <>
        <div className={FooterCSS.container}>
        
            <svg width="1241" height="444" viewBox="0 0 1241 444" fill="#013E9B" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 131H534C592.219 128.536 620.354 124.219 663 112C745.785 88.3072 791.202 74.2859 870.5 48C949.139 23.9318 983.194 15.0375 1022.5 9.00001C1061.52 2.21945 1081.77 0.613456 1115.5 1.00001C1149.87 2.19486 1166.42 3.98261 1191.5 9.00001C1213.74 15.0022 1224.01 18.8646 1239 26.5L1240 443.5H1V131Z" stroke="black"/>
            </svg>
            <svg width="1240" height="416" viewBox="0 0 1240 416" fill="#D2AE00" xmlns="http://www.w3.org/2000/svg">
            <path d="M1081.5 63.5C1081.17 63.5452 1080.83 63.5905 1080.5 63.6358M1080.5 63.6358C1011.95 72.967 958.113 84.3554 838 114.5C770.145 128.649 730.937 132.479 658.5 130.5C611.348 124.365 583.733 118.396 532.5 103.5C533 104 366.475 51.3726 232.5 14.5C203.737 7.88057 182.541 4.67194 135.5 1.50001C125.85 1.13858 117.696 1.27679 102.5 1.50001C90.1225 1.76757 82.5966 2.1916 68 3.50001C45.0329 5.74284 30.4901 9.08539 1 19.5V415H1239.5L1239 101C1213.02 79.4162 1195.14 71.8756 1158.5 65C1152.61 64.2699 1149.69 63.1839 1130 62C1113.5 61.0383 1102.78 61.3307 1080.5 63.6358Z" stroke="black"/>
            </svg>
            <div className={FooterCSS.row_general}>
                <ColOne></ColOne>
                <ColTwo></ColTwo>
                <ColThree></ColThree>
            </div>
        </div>
        

    </>
  )
}

function ColOne() {

    return (
        <div className={FooterCSS.col1}>
            <div className={FooterCSS.row1}>OFERTAS Y PROMOCIONES</div>
            <div className={FooterCSS.row2}>No te pierdas <br></br> nuestras ofertas!</div>
            <div className={FooterCSS.row3}>
                <div>Tu dirección de correo electrónico</div>
                <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 512 512" fill='#004AC1'><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
            </div>
            <div className={FooterCSS.row4}>
                <div className={FooterCSS.container_logo}>
                    <img src={Logo} height={30}></img>
                </div>
                <div>
                    <div className={FooterCSS.label_col1_row4}>Envíos y devoluciones</div>
                    <div className={FooterCSS.central}>Preguntas Frecuentes</div>
                </div>
                <div>
                    <div className={FooterCSS.label_col1_row4}>Aviso de privacidad</div>
                    <div>Términos y condiciones</div>
                </div>
            </div>
            <div className={FooterCSS.row5}>Todos los derechos reservados - © Macropay 2022</div>
        </div>
    )
  }

  function ColTwo() {

    return (
        <div className={FooterCSS.col2}>
            <div className={FooterCSS.col2_row1}>
                <svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg" height={80} width={80}>
                    <circle cx="60" cy="60" r="30" />
                </svg>
                <svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg" height={80} width={80}>
                    <circle cx="60" cy="60" r="30" />
                </svg>
            </div>
            <div className={FooterCSS.col2_row2}>
                <svg className={FooterCSS.semicircle} width="150" height="50" viewBox="0 0 114 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1C44.9402 36.8018 69.5145 35.928 113.5 1"/>
                </svg>
            </div>

        </div>
    )
  }

  function ColThree() {

    return (
        <div className={FooterCSS.col3}>
            <div className={FooterCSS.col3_row1}>Conversemos!</div>
            <div className={FooterCSS.col3_row2}>Lorem ipsum dolor sit amet</div>
            <div className={FooterCSS.col3_row3}>
                <img src={Facebook}></img>
                <img src={Instagram}></img>
                <img src={Linkedin}></img>
                <img src={Whatsapp}></img>
            </div>
        </div>
    )
  }


export default Footer;
