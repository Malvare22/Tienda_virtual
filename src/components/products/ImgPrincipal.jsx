import ImgPrincipalCSS from './ImgPrincipal.module.css';
import HeartFill from '../../assets/svg/heart-fill';
import Heart from '../../assets/svg/heart';
import { useState } from 'react';

export default function ImgPrincipal({enable = false, value, width, height}){

    const [hearted, setHearted] = useState(false);

    const handleButton = () => {
        setHearted(!hearted);
    }

    return <>
        <div className={ImgPrincipalCSS.container} style={{width: width, height: height}}>
            <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width={width} height={height} />
            <div className={enable == true ? ImgPrincipalCSS.offer : ImgPrincipalCSS.offer_no_show}>
                {value}%
            </div>

            {hearted == true ? 
                <><HeartFill className={ImgPrincipalCSS.heart_fill} onClick={handleButton}></HeartFill></> : <><Heart className={ImgPrincipalCSS.heart} onClick={handleButton}></Heart></>
            }
        </div>
    </>;
  }