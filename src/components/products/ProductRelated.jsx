import {DataContext} from '/src/context/DataContext.jsx'
import ProductRelatedCSS from './ProductRelated.module.css'
import { useContext } from 'react';
import ProductCard from './ProductCard';

export default function ProductRelated({category}) {
    
    const {data} = useContext(DataContext);

    const filteredData = () => {
        const filtered = data.filter(p => (p['category'] == category));
        return filtered.slice(0, 3);
      }

    return (
    <div className={ProductRelatedCSS.container}>
        <div className={ProductRelatedCSS.label}>Productos Relacionados</div>
        <div className={ProductRelatedCSS.grid}>
            {
                data != null && filteredData().map(
                    (p, i) => <ProductCard key={i} id={p['id']} name={p['name']} price={p['price']} discount={p['discount']} review={p['reviews']} img1={p['img'][0]} img2={p['img'][1]}></ProductCard>
                )
            }
        </div>
    </div> 
    );
}