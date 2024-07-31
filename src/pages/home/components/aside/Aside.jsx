import { useState } from "react";
import Sorter from "./filters/Sorter";
import { Card } from "antd";
import Reviews from "./filters/Reviews";
import Option from "./filters/Option";
import Cost from "./filters/Cost";
import AsideCSS from './Aside.module.css'

export default function Aside({sort, setSort, brand, setBrand, range, setRange, score, setScore}){

    return(
        <div>
            <div>
                <Sorter sort={sort} setSort={setSort}></Sorter>
            </div>
            <div className={AsideCSS.card_options}>
                <Card>
                    <Option label={'Marcas'} brand={brand} setBrand={setBrand}></Option>
                    <Cost range={range} setBrand={setRange}></Cost>
                    <Reviews score={score} setScore={setScore}></Reviews>
                </Card>
            </div>
        </div>
      );
}