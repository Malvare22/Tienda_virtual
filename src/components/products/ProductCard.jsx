import { Button, Card } from 'antd';
import ProductCardCSS from './ProductCard.module.css';
import ImgPrincipal from './ImgPrincipal';
import Meta from 'antd/es/card/Meta';
import { StarScore } from '../star_score/StarScore';
import { useContext, useState } from 'react';
import getDiscountPrice from '../../utilities/getDiscountPrice';
import getReviewAverage from '../../utilities/getReviewAverage';
import { Link } from 'react-router-dom';
import {DataContext} from '/src/context/DataContext.jsx'

function ProductCard({product}) {

    const {setCurrentProduct, setModal} = useContext(DataContext);

    const handleButton = () => {
        setCurrentProduct(product);
        setModal(true);
    };

    return (
      <div className={ProductCardCSS.container}>
            <Card hoverable cover={<ImgPrincipal enable={true} value={product['discount']} width={"280px"} height={"320px"} src1={product['img'][0]} src2={product['img'][1]}></ImgPrincipal>}>
                <div className={ProductCardCSS.body}>
                    <div className={ProductCardCSS.row1}>
                        <div className={ProductCardCSS.row1_col1}>
                            <div className={ProductCardCSS.tittle}>
                               <Link to={'/product/?id='+product['id']}>{product['name']}</Link>
                            </div>
                            <div className={ProductCardCSS.score}>
                                <StarScore score={getReviewAverage(product['reviews'])}></StarScore>
                            </div>
                        </div>
                        <div className={ProductCardCSS.row1_col2}>
                            <div className={ProductCardCSS.price}>
                                ${getDiscountPrice(product['price'], product['discount'])}
                            </div>
                            <div className={ProductCardCSS.old_price}>
                                ${product['price']}
                            </div>
                        </div>
                    </div>
                    <div className={ProductCardCSS.row2}>
                        <div className={ProductCardCSS.row2_col1}>
                            <div className={ProductCardCSS.credit}>
                                $120 p/semana o $520 p/mes
                            </div>
                        </div>
                        <div className={ProductCardCSS.row2_col2}>
                            <div>
                                <Button className={ProductCardCSS.btn} onClick={handleButton} type="primary"> Lo Quiero!</Button>     
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
      </div>
    )
  }

  
  export default ProductCard