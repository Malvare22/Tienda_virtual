import { useState } from "react";
import Sorter from "./filters/Sorter";
import { Card } from "antd";
import Reviews from "./filters/Reviews";
import Option from "./filters/Option";
import Cost from "./filters/Cost";

export default function Aside(){
    const [brand, setBrand] = useState(0);
    const [range, setRange] = useState([0, 0]);
    return(
        <div>
            <div>
                <Sorter></Sorter>
            </div>
            <div>
                <Card>
                    <Option label={'Marcas'} value={brand} setValue={setBrand}></Option>
                    <Cost value={range} setValue={setRange}></Cost>
                    <Reviews></Reviews>
                    <Option label={'Memoria'} value={brand} setValue={setBrand}></Option>
                    <Option label={'Rango'} value={brand} setValue={setBrand}></Option>
                    <Option label={'Cámara'} value={brand} setValue={setBrand}></Option>
                </Card>
            </div>
        </div>
      );
}