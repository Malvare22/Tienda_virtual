import { Image, Tabs } from 'antd';
import { StarScore } from '../../components/star_score/StarScore';
import ProductCSS from './Product.module.css'
import BuyProtect from '/src/assets/img/buy_protect.png'
import CreditBanner from '/src/assets/img/credit_banner.png'
import ImgPrincipal from '/src/components/products/ImgPrincipal.jsx'
import Specifications from './components/Specifications';
import {DataContext} from '/src/context/DataContext.jsx'
import { useContext, useEffect, useState } from 'react';
import getReviewAverage from '../../utilities/getReviewAverage';
import getDiscountPrice from '../../utilities/getDiscountPrice';
import TabsInformation from './components/TabsInformation';
import Review from './components/Review';

function Product() {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id");
    const {data} = useContext(DataContext);
    const [product, setProduct] = useState(null);
    
    useEffect(
        () => {
            const get = async () => {
                if(data == null) return;
                let temp = null;
                for (let i = 0; i < data['products'].length; i++) {
                    const current = data['products'][i];
                   if( id == current['id']){
                        temp =current;
                        break;
                   }      
                }
                setProduct(temp);
            };

            get();
        }, [data]
    )
  return (<>
        <div className={ProductCSS.container}>
            <ImgPanel></ImgPanel>
            <ProductGeneralInformation product={product}></ProductGeneralInformation>
        </div>
        
        <div className={ProductCSS.ajust}>
            <div className={ProductCSS.details}>
                Información Detallada del Producto
            </div>
            <div className={ProductCSS.container_row2}>
                <div className={ProductCSS.img_grid}>
                    {
                        product != null && (
                            product['img'].map(
                                (image, index) => <Image src={image} key={index} alt={index} height={"482px"} width={"300px"}></Image>
                            )
                        )
                    }
                </div>
                <div className={ProductCSS.tabs}>
                    <TabsInformation product={product} type={1}></TabsInformation>
                </div>
                
            </div>
        </div>
    </> )
}

function ImgPanel(){
    return <div className={ProductCSS.img_panel}>
            <div>
                <ImgPreview></ImgPreview>
                <ImgPreview></ImgPreview>
                <ImgPreview></ImgPreview>
                <ImgPreview></ImgPreview>
            </div>
            <ImgPrincipal enable={true} type={2} value={40} width={"400px"} height={"500px"} src1={"https://m.media-amazon.com/images/I/71QQZr2pNSL.jpg"}></ImgPrincipal>
    </div>;
}

function ImgPreview(){
    return <div className={ProductCSS.img_preview}>
        <Image height={(420/4) + "px"} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    </div>;
}

function ProductGeneralInformation({product}){
    return (<>
        {product != null && <div className={ProductCSS.container_information}>
            <div className={ProductCSS.row1}>
                <div className={ProductCSS.row1_col1}>
                    <div className={ProductCSS.tittle}>
                        {product.name}
                    </div>
                    <div className={ProductCSS.score}>
                        <StarScore score={getReviewAverage(product.reviews)}></StarScore>
                    </div>
                </div>
                <div className={ProductCSS.row1_col2}>
                    <div className={ProductCSS.price}>
                        ${product.price}
                    </div>
                    <div className={ProductCSS.old_price}>
                        ${getDiscountPrice(product.price, product.discount)}
                    </div>
                    <div className={ProductCSS.methods}>
                        Tarjetas
                    </div>
                </div>
            </div>
            <div className={ProductCSS.description}>
                {product.description}
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
        </div>}
        </>);
}

export default Product
