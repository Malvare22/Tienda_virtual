import SpecificationsCSS from './Specifications.module.css';

/**
 * 
 * type 1 -> Cellphone
 * type 2-> Motorcycle
 */
export default function Specifications({type, product}){

    return<>
      {type == 1 ? <SpecificationsCellPhone product={product}></SpecificationsCellPhone> : <div></div>}
    </>;
}

function SpecificationsCellPhone({product}){

  return<div className={SpecificationsCSS.container}>
      {product != null && (<>
        <div className={SpecificationsCSS.regular}>
            <div>Fabricante</div>
            <div>Peso del producto</div>
            <div>Dimensiones</div>
            <div>País de Origen</div>
            <div>Número de modelo</div>
            <div>Color</div>
            <div>Material</div>
            <div>Cantidad de piezas</div>
            <div>Características especiales</div>
            <div>Componentes incluidos</div>
        </div>
        <div className={SpecificationsCSS.label}>
            <div>{product['manufacturer']}</div>
            <div>{product['weight']}</div>
            <div>{product['dimensions']}</div>
            <div>{product['countryOfOrigin']}</div>
            <div>{product['modelNumber']}</div>
            <div>{product['color']}</div>
            <div>{product['material']}</div>
            <div>{product['numberOfPieces']}</div>
            <div>{product['specialFeatures']}</div>
            <div>{product['componentsIncluded']}</div>
        </div>
      </>)}
  </div>;
}