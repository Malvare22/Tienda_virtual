import { Button, Card, Col, InputNumber, Row, Slider, Switch } from 'antd';
import AdviceCSS from './Advice.module.css';
import { labels } from '../../../utilities/labels';


export default function Advice({type}){

    return <>
        <Card className={AdviceCSS.container}>
            <div className={AdviceCSS.tittle}>Lleva {labels[type]}<br></br>a Crédito!</div>
            <div className={AdviceCSS.label}>¿Qué necesitas?</div>
            <List>Tu cuenta de Facebook</List>
            <List>Tu INE Vigente</List>
            <List>Correo electrónico</List>
        </Card>
    </>
}

function List({children}){
    return <div className={AdviceCSS.item}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
        </svg>
        {children}
    </div>
}

