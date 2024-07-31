import ImgPrincipalCSS from './ImgPrincipal.module.css';
import HeartFill from '../../assets/svg/heart-fill';
import Heart from '../../assets/svg/heart';
import { useEffect, useState } from 'react';

/**
 * 
 * type 1 -> to card
 * type 2 -> no hover
 */
export default function ImgPrincipal({type = 1, img, product, width, height}){

    const [hearted, setHearted] = useState(false);

    useEffect(
        () => {
            let likes = localStorage.getItem('liked');
            likes = likes ? JSON.parse(likes) : [];
            if(Array.isArray(likes) && likes.includes(product['id'])) setHearted(true);
        }, []
    )

    const handleButton = () => {
        const currentValue = !hearted;
        setHearted(currentValue);
        let likes = localStorage.getItem('liked');
        likes = likes ? JSON.parse(likes) : [];
        if(Array.isArray(likes) && currentValue == true){
            likes.push(product['id']);
        }
        else{
            if(Array.isArray(likes))
            likes = likes.filter((element) => element != product['id']);
        }
        localStorage.setItem('liked', JSON.stringify(likes));
    }

    return <>
        <div className={ImgPrincipalCSS.container} style={{width: width, height: height}}>
            {
                product != null && type == 1 ? 
                <><img className={ImgPrincipalCSS.img1} alt="img_01" src={product['img'][0]} width={width} height={height} />
                <img className={ImgPrincipalCSS.img2} alt="img_02" src={product['img'][1]} width={width} height={height} /></>
                : <img className={ImgPrincipalCSS.img1} alt="img_01" src={img} width={width} height={height} />
            
             }
            <div className={product['discount'] != 0 ? ImgPrincipalCSS.offer : ImgPrincipalCSS.offer_no_show}>
                {product['discount']}%
            </div>

            {hearted == true ? 
                <><HeartFill className={ImgPrincipalCSS.heart_fill} onClick={handleButton}></HeartFill></> : <><Heart className={ImgPrincipalCSS.heart} onClick={handleButton}></Heart></>
            }
        </div>
    </>;
  }