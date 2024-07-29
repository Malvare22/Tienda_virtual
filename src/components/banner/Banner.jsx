import { Carousel } from 'antd';
import BannerCSS from './Banner.module.css'
import Img1 from '/src/assets/img/img_banner_1.png';
import Img2 from '/src/assets/img/img_banner_2.png';

const contentStyle = {
    margin: 0,
    color: 'black',
    lineHeight: '160px',
    textAlign: 'center',
  };

function Banner() {

  return (
    <div className={BannerCSS.container}>
          <div>Ofertas y Promociones</div>
          <div className={BannerCSS.row}>
                <div><Carousel arrows infinite={false}>
                    <div>
                        <img src={Img1} style={contentStyle}></img>
                    </div>
                    <div>
                        <img src={Img2} style={contentStyle}></img>
                    </div>
                </Carousel></div>
             </div>
    </div>
  )
}

export default Banner
