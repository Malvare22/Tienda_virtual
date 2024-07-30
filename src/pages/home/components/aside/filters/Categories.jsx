import { Dropdown } from 'antd';
import FiltersCSS from './Filters.module.css'
import { DownOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';


export default function Categories({category, setCategory}){

  const [text, setText] = useState(null);

  useEffect(
    () => {
      if(category == null) setText(<>Todas las Categorias<DownOutlined/></>);
      if(category == 'phone') setText(<>Celulares</>);
      if(category == 'motorcycle') setText(<>Motocicletas</>);
    }, [category]
  )

    const items = [
        {
          key: '1',
          label: (
              <div onClick={() => setCategory(null)}>Todas las categorías</div>
          ),
        },
        {
          key: '2',
          label: (
            <div onClick={() => setCategory('phone')}>Motocicletas</div>
          ),
        },
        {
          key: '3',
          label: (
              <div onClick={() => setCategory('motorcycle')}>Celulares</div>
          ),
        },
      ];
    
        return(
            <>
                <div className={FiltersCSS.categories}>
                    <Dropdown menu={{ items }}>
                        <a onClick={(e) => e.preventDefault()}>
                            {text}
                        </a>
                    </Dropdown>
                </div>
            </>
        );
}