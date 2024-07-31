import { Dropdown, Space } from "antd";
import FiltersCSS from './Filters.module.css'
import { DownOutlined } from '@ant-design/icons';

export default function Sorter({sort, setSort}){

  const labels = [
    "Selecciona",
    "Precios Altos",
    "Precios Bajos",
    "Mejores Reviews",
    "Peores Reviews"
  ];

  const items = [
    {
      key: '1',
      label: (
          <div onClick={() => setSort(1)}>Precios Altos</div>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={() => setSort(2)}>Precios Bajos</div>
      ),
    },
    {
      key: '3',
      label: (
        <div onClick={() => setSort(3)}>Mejores Reviews</div>
      )
    },
    {
      key: '4',
      label: (
        <div onClick={() => setSort(4)}>Peores Reviews</div>
      )
    }
  ];



    return(
        <div className={FiltersCSS.sorter}>
            <div className={FiltersCSS.sorter_label}>Ordenar por</div>
            <div className={FiltersCSS.sorter_option}>
                <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <>{labels[sort]}<DownOutlined/></>
                    </a>
                </Dropdown>
            </div>
        </div>
    );
}