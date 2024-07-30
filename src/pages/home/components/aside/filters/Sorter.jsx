import { Dropdown, Space } from "antd";
import FiltersCSS from './Filters.module.css'
import { DownOutlined } from '@ant-design/icons';

export default function Sorter(){

  const items = [
    {
      key: '1',
      label: (
          <>Precios Altos</>
      ),
    },
    {
      key: '2',
      label: (
        <>Precios Bajos</>
      ),
    },
    {
      key: '3',
      label: (
        <>Mejores Reviews</>
      )
    },
    {
      key: '4',
      label: (
        <div>Peores Reviews</div>
      )
    }
  ];

    return(
        <div className={FiltersCSS.sorter}>
            <div>Ordenar por</div>
            <div>
                <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        Ordenar por
                        <DownOutlined/>
                    </a>
                </Dropdown>
            </div>
        </div>
    );
}