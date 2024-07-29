import { Button, Card } from 'antd';
import ProductCardCSS from './ProductCard.module.css';
import ImgPrincipal from './ImgPrincipal';
import Meta from 'antd/es/card/Meta';
import { StarScore } from '../star_score/StarScore';
import { useState } from 'react';
function ProductCard() {

    return (
      <div className={ProductCardCSS.container}>
            <Card hoverable cover={<ImgPrincipal enable={true} value={40} width={"320px"} height={"370px"}></ImgPrincipal>}>
                <div className={ProductCardCSS.body}>
                    <div className={ProductCardCSS.row1}>
                        <div className={ProductCardCSS.row1_col1}>
                            <div className={ProductCardCSS.tittle}>
                                Samsung Galaxy
                            </div>
                            <div className={ProductCardCSS.score}>
                                <StarScore score={4}></StarScore>
                            </div>
                        </div>
                        <div className={ProductCardCSS.row1_col2}>
                            <div className={ProductCardCSS.price}>
                                $3,499
                            </div>
                            <div className={ProductCardCSS.old_price}>
                                $5,499
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