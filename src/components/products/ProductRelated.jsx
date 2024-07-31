import {DataContext} from '/src/context/DataContext.jsx'
import ProductRelatedCSS from './ProductRelated.module.css'
import { useContext } from 'react';
import ProductCard from './ProductCard';

/**
 *  type 1 = Relacionados 
 *  type 2 = más vendidos
 */
export default function ProductRelated({type = 1, category}) {
    
    const {data} = useContext(DataContext);

    const bestSellers = (a, b) => b['sales'] - a['sales']; 

    const filteredData = () => {
        let filtered = data;
        
        if(type == 1){
            filtered = data.filter(p => (p['category'] == category));
        }
        else{
            filtered.sort(bestSellers);
        }
        return filtered.slice(0, 3);
      }

    return (
    <div className={ProductRelatedCSS.container}>
        <div className={ProductRelatedCSS.label}>{type == 1 ? "Productos Relacionados" : "Nuestros Productos Más Vendidos"}</div>
        <div className={ProductRelatedCSS.grid}>
            {
                data != null && filteredData().map(
                    (p, i) => <ProductCard key={i} id={p['id']} product={p}></ProductCard>
                )
            }
        </div>
    </div> 
    );
}