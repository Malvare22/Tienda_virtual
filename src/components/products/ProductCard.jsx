import { Button, Card } from 'antd';
import ProductCardCSS from './ProductCard.module.css';
import ImgPrincipal from './ImgPrincipal';
import Meta from 'antd/es/card/Meta';
import { StarScore } from '../star_score/StarScore';
import { useState } from 'react';
import getDiscountPrice from '../../utilities/getDiscountPrice';
import getReviewAverage from '../../utilities/getReviewAverage';
import { Link } from 'react-router-dom';

function ProductCard({id, name, price, discount, review, img1, img2}) {

    return (
      <div className={ProductCardCSS.container}>
            <Card hoverable cover={<ImgPrincipal enable={true} value={discount} width={"280px"} height={"320px"} src1={img1} src2={img2}></ImgPrincipal>}>
                <div className={ProductCardCSS.body}>
                    <div className={ProductCardCSS.row1}>
                        <div className={ProductCardCSS.row1_col1}>
                            <div className={ProductCardCSS.tittle}>
                               <Link to={'/product/?id='+id}>{name}</Link>
                            </div>
                            <div className={ProductCardCSS.score}>
                                <StarScore score={getReviewAverage(review)}></StarScore>
                            </div>
                        </div>
                        <div className={ProductCardCSS.row1_col2}>
                            <div className={ProductCardCSS.price}>
                                ${getDiscountPrice(price, discount)}
                            </div>
                            <div className={ProductCardCSS.old_price}>
                                ${price}
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
                                <Button className={ProductCardCSS.btn} type="primary"> Lo Quiero!</Button>     
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
      </div>
    )
  }

  
  export default ProductCard