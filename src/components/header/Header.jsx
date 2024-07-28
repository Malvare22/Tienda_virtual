import Logo from '/src/assets/svg/logo.svg';
import Car from '/src/assets/svg/car.svg';
import HeaderCSS from './Header.module.css';

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
            <div className={HeaderCSS.ad}>
                    <div>
                        <h3>COMPRA A</h3>
                        <h2>CRÉDITO</h2>
                    </div>
            </div>
    </div>
    
    </>
  );
    
}


export default Header;
