import { Image } from 'antd';
import { StarScore } from '../../components/star_score/StarScore';
import ProductCSS from './Product.module.css'
import BuyProtect from '/src/assets/img/buy_protect.png'
import CreditBanner from '/src/assets/img/credit_banner.png'
import ImgPrincipal from '/src/components/products/ImgPrincipal.jsx'

function Product() {

  return (
    <div className={ProductCSS.container}>
        <ImgPanel></ImgPanel>
        <ProductGeneralInformation></ProductGeneralInformation>
    </div>
  )
}

function ImgPanel(){
    return <div className={ProductCSS.img_panel}>
            <div>
                <ImgPreview></ImgPreview>
                <ImgPreview></ImgPreview>
                <ImgPreview></ImgPreview>
                <ImgPreview></ImgPreview>
            </div>
            <ImgPrincipal enable={true} value={40} width={"400px"} height={"700px"}></ImgPrincipal>
    </div>;
}

function ImgPreview(){
    return <div className={ProductCSS.img_preview}>
        <Image height={(600/4) + "px"} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    </div>;
}

function ProductGeneralInformation(){
    return (
        <div className={ProductCSS.container_information}>
            <div className={ProductCSS.row1}>
                <div className={ProductCSS.row1_col1}>
                    <div className={ProductCSS.tittle}>
                        Samsung A10S 13+2MP 64GB, 4GB RAM
                    </div>
                    <div className={ProductCSS.score}>
                        <StarScore score={4}></StarScore>
                    </div>
                </div>
                <div className={ProductCSS.row1_col2}>
                    <div className={ProductCSS.price}>
                        $4,100
                    </div>
                    <div className={ProductCSS.old_price}>
                        $3,499
                    </div>
                    <div className={ProductCSS.methods}>
                        Tarjetas
                    </div>
                </div>
            </div>
            <div className={ProductCSS.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.... <br></br>
                Ver más
            </div>
            <div className={ProductCSS.row3}>
                <div>
                    <img src={BuyProtect} width={"38%"}></img>
                </div>
                <div className={ProductCSS.limit}>
                    La promoción vence en 24d 12h:43m
                </div>
            </div>
            <div className={ProductCSS.row4}>
                <img src={CreditBanner} width={"115%"}>

                </img>
            </div>
        </div>
    );
}

export default Product
