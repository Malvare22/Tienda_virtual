import { Dropdown } from 'antd';
import FiltersCSS from './Filters.module.css'
import { DownOutlined } from '@ant-design/icons';


export default function Categories(){
    const items = [
        {
          key: '1',
          label: (
              <>Celulares</>
          ),
        },
        {
          key: '2',
          label: (
            <>Motocicletas</>
          ),
        }
      ];
    
        return(
            <>
                <div className={FiltersCSS.categories}>
                    <Dropdown menu={{ items }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <>Todas las Categorias
                            <DownOutlined/></>
                        </a>
                    </Dropdown>
                </div>
            </>
        );
}