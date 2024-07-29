import { Button, Card } from 'antd';
import ProductCardCSS from './ProductCard.module.css';
import Meta from 'antd/es/card/Meta';
import { StarScore } from '../star_score/StarScore';
import HeartFill from '../../assets/svg/heart-fill';
import Heart from '../../assets/svg/heart';
import { useState } from 'react';
function ProductCard() {

    return (
      <div className={ProductCardCSS.container}>
            <Card hoverable cover={<ImgProduct></ImgProduct>}>
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

  function ImgProduct({value, setValue}){

    const [hearted, setHearted] = useState(false);

    const flag = 1;
    const handleButton = () => {
        setHearted(!hearted);
    }

    return <>
        <div className={ProductCardCSS.container_img}>
            <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <div className={flag == 1 ? ProductCardCSS.offer : ProductCardCSS.offer_no_show}>
                40%
            </div>

            {hearted == true ? 
                <><HeartFill className={ProductCardCSS.heart_fill} onClick={handleButton}></HeartFill></> : <><Heart className={ProductCardCSS.heart} onClick={handleButton}></Heart></>
            }
        </div>
    </>;
  }
  
  export default ProductCard