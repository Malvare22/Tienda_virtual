import Logo from '/src/assets/svg/logo.svg';
import Car from '/src/assets/svg/car.svg';
import HeaderCSS from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {

  return(
    <>
        <div className={HeaderCSS.container}>
            <div className={HeaderCSS.logo}>
                <img src={Logo}></img>
            </div>
            <div className={HeaderCSS.container_btns}>
                <div  className={HeaderCSS.btn1}>
                    Crea tu cuenta
                </div>
                <div className={HeaderCSS.btn2}>
                    Iniciar sesión
                </div>
                <div className={HeaderCSS.car}>
                    <img src={Car}></img>
                </div>
                
            </div>
            {/* <div className={HeaderCSS.ad}>
                    <div>
                        <h3>COMPRA A</h3>
                        <h2>CRÉDITO</h2>
                    </div>
            </div> */}
    </div>
    <div className={HeaderCSS.categories}>
        <Option text={'Home'} link='/'></Option>
        <Option text={'Celulares'} link='/?category=phone'></Option>
        <Option text={'Motocicletas'} link='/?category=motorcycle'></Option>
        <Option text={'Tus préstamos'}></Option>
        <Option text={'Tiendas'}></Option>
        <Option text={'Tracking'}></Option>
        <Option text={'Club Macropay'}></Option>
    </div>
    
    </>
  );
    
}

const Option = ({text, link = ""}) => {

    return(<>
        <div>
            <Link to={link}>{text}</Link>
            <div className={HeaderCSS.line}>
                <svg viewBox="0 0 10 4" xmlns="http://www.w3.org/2000/svg">
                    <line x1="3" y1="0" x2="7" y2="0" />
                </svg>      
            </div>
        </div>
    </>);
};


export default Header;
