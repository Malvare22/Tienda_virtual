import ImgPrincipalCSS from './ImgPrincipal.module.css';
import HeartFill from '../../assets/svg/heart-fill';
import Heart from '../../assets/svg/heart';
import { useState } from 'react';

/**
 * 
 * type 1 -> to card
 * type 2 -> no hover
 */
export default function ImgPrincipal({type = 1, enable = false, value, width, height, src1, src2}){

    const [hearted, setHearted] = useState(false);

    const handleButton = () => {
        setHearted(!hearted);
    }

    return <>
        <div className={ImgPrincipalCSS.container} style={{width: width, height: height}}>
            {
                type == 1 ? 
                <><img className={ImgPrincipalCSS.img1} alt="img_01" src={src1} width={width} height={height} />
                <img className={ImgPrincipalCSS.img2} alt="img_02" src={src2} width={width} height={height} /></>
                : <img className={ImgPrincipalCSS} alt="img_01" src={src1} width={width} height={height} />
            
             }
            <div className={enable == true ? ImgPrincipalCSS.offer : ImgPrincipalCSS.offer_no_show}>
                {value}%
            </div>

            {hearted == true ? 
                <><HeartFill className={ImgPrincipalCSS.heart_fill} onClick={handleButton}></HeartFill></> : <><Heart className={ImgPrincipalCSS.heart} onClick={handleButton}></Heart></>
            }
        </div>
    </>;
  }