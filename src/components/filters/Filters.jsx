import FiltersCSS from './Filters.module.css';
import { Card, Dropdown, Space } from "antd";
import { Checkbox } from "antd";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState } from 'react';
import Star from '../../assets/svg/star';
import Search from 'antd/es/transfer/search';
import ProductCard from '../products/ProductCard';
import { StarHandleScore } from '../star_score/StarScore';

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
    <div>
        <div className={FiltersCSS.row1}>
            <Sorter></Sorter>
            <SearchBar></SearchBar>
        </div>
        <div className={FiltersCSS.row2}>
            <Card className={FiltersCSS.filters}>
                <Option label={'Marcas'} value={brand} setValue={setBrand}></Option>
                <Cost value={range} setValue={setRange}></Cost>
                <Reviews score={score} setScore={setScore}></Reviews>
                <Option label={'Memoria'} value={brand} setValue={setBrand}></Option>
                <Option label={'Rango'} value={brand} setValue={setBrand}></Option>
                <Option label={'Cámara'} value={brand} setValue={setBrand}></Option>
            </Card>
            <ProductCard></ProductCard>
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
                <StarHandleScore score={score} setScore={setScore}></StarHandleScore>
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

function SearchBar(){

    const onSearch = (e) => console.log(e.target.value);

    return(
        <div className={FiltersCSS.search_bar}>
            <Search placeholder="input search text" onChange={onSearch} style={{ width: 40 }} />
            <Dropdown menu={{ items }} className={FiltersCSS.dropdown_categories}>
                <a onClick={(e) => e.preventDefault()}>
                    Selecciona <DownOutlined/>
                </a>
            </Dropdown>
        </div>
    );
} 

export default Filters;
