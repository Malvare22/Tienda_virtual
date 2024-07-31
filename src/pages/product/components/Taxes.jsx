import { Button, Card, Col, InputNumber, Row, Slider, Switch } from 'antd';
import TaxesCSS from './Taxes.module.css';
import SmileFace from '/src/assets/img/smile_face.png'
import { useState } from 'react';
import { getPercentage } from '../../../utilities/getPercentage';

const formatter = (value) => `${value}%`;

export default function Taxes({product}){

    const [inputValue, setInputValue] = useState(15);
    const onChange = (newValue) => {
        setInputValue(newValue);
    };
    const getValue = () => {
        return getPercentage(product['price'], inputValue);
    }

    return <>
        <Card className={TaxesCSS.container}>
            <div className={TaxesCSS.smile_face}><img src={SmileFace} width={"100px"}></img></div>
            <div className={TaxesCSS.tittle}>¿Te falta una lanita?</div>
            <div className={TaxesCSS.price}>PAGO SEMANAL ${Math.ceil(getValue()/4)}</div>
            <div className={TaxesCSS.price}>ENGANCHE ${getValue()}</div>
            <div className={TaxesCSS.slice}>
                <Slider value={inputValue} onChange={onChange} tooltip={{
                    formatter,
                }}/>        
            </div>
            <div className={TaxesCSS.text}>
                <div>Enganche</div>
            </div>
            <div className={TaxesCSS.btn}><Button>Aplica ahora</Button></div>
            <div className={TaxesCSS.terms}>*Hasta $2,000 de manera fácil, rápida y confiable</div>
        </Card>
    </>
}

