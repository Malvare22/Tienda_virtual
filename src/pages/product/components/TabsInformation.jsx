import { Tabs } from "antd";
import TabsCSS from './TabsInformation.module.css';
import Specifications from "./Specifications";
import Review from "./Review";

/**
 * 
 * type 1 -> Cellphone
 * type 2-> Motorcycle
 */
export default function TabsInformation({type, product}){

  const items = [
    {
      key: '1',
      label: <div className={TabsCSS.label}>Otras Especificaciones</div>,
      children: <Specifications type={type} product={product}></Specifications>,
    },
    {
      key: '2',
      label: <div className={TabsCSS.label}>Reviews ({product['reviews'].length})</div>,
      children: <div>
        {product != null && (
          product['reviews'].map(
            (review, key) => {
              return <Review key={key} review={review}></Review>
            }
          )
        )}
      </div>,
    },
  ];

    return<>
      <Tabs defaultActiveKey="1" items={items} />
    </>;
}

