import FiltersCSS from './Filters.module.css';
import { Card, Dropdown, Space } from "antd";
import { Checkbox } from "antd";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState } from 'react';
import Star from '../../assets/svg/star';

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      )
    }
  ];

function Filters() {

    const [score, setScore] = useState(0);
    const [brand, setBrand] = useState(0);
    const [range, setRange] = useState([0, 0]);

  return(
    <div className={FiltersCSS.center}>
        <div>
            <Sorter></Sorter>
            <Card className={FiltersCSS.container}>
                <Option label={'Marcas'} value={brand} setValue={setBrand}></Option>
                <Cost value={range} setValue={setRange}></Cost>
                <Reviews score={score} setScore={setScore}></Reviews>
                <Option label={'Memoria'} value={brand} setValue={setBrand}></Option>
                <Option label={'Rango'} value={brand} setValue={setBrand}></Option>
                <Option label={'Cámara'} value={brand} setValue={setBrand}></Option>
            </Card>
        </div>
    </div>
  );
    
}

function Option({label, value, setValue}){
    return(
        <>
            <div className={FiltersCSS.label}>
                {label}
            </div>
            <div>
                <div><Checkbox onClick={() => setValue(0)} checked={value == 0}>Xiaomi</Checkbox></div>
                <div><Checkbox  onClick={() => setValue(1)} checked={value == 1}>Apple</Checkbox></div>
                <div><Checkbox  onClick={() => setValue(2)} checked={value == 2}>Nokia</Checkbox></div>
            </div>
        </>
    )
}

function Cost({value, setValue}){
    const handleInput = (e, pos) => {
        let tmp = value;
        let v = e.target.value;
        tmp[pos] = v;
        setValue(tmp);
    }

    return(
        <>
            <div className={FiltersCSS.label}>
                Precio
            </div>
            <div>
                <input type='number' onChange={(e) => handleInput(e, 0)} ></input> - <input type='number' onChange={(e) =>handleInput(e, 1)}></input>
            </div>
        </>
    )
}

function Reviews({score, setScore}){
    return(
        <>
            <div className={FiltersCSS.label} onClick={() => console.log("A")}>
                Reviews
            </div>
            <div className={FiltersCSS.container_star}>
                <Star className={score >= 1 ? FiltersCSS.star_fill : FiltersCSS.star_no_fill} onClick={() => setScore(1)}></Star>
                <Star className={score >= 2 ? FiltersCSS.star_fill : FiltersCSS.star_no_fill} onClick={() => setScore(2)}></Star>
                <Star className={score >= 3 ? FiltersCSS.star_fill : FiltersCSS.star_no_fill} onClick={() => setScore(3)}></Star>
                <Star className={score >= 4 ? FiltersCSS.star_fill : FiltersCSS.star_no_fill} onClick={() => setScore(4)}></Star>
                <Star className={score == 5 ? FiltersCSS.star_fill : FiltersCSS.star_no_fill} onClick={() => setScore(5)}></Star>
            </div>
        </>
    )
}

function Sorter({value, setValue}){
    return(
        <div className={FiltersCSS.sorter}>
            <div>Ordenar por</div>
            <div>
                <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <>Selecciona</>
                        <Space></Space>
                        <DownOutlined/>
                    </a>
                </Dropdown>
            </div>
        </div>
    );
}

export default Filters;
