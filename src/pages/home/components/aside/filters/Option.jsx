import { Checkbox } from "antd";
import FiltersCSS from './Filters.module.css'
import { useContext } from "react";
import {DataContext} from '/src/context/DataContext.jsx'
import { getManufacturers } from "../../../../../utilities/getManufacturers";

export default function Option({label, brand, setBrand}){

    const {data} = useContext(DataContext);

    const manufacturers = () => {
        return getManufacturers(data);
    }

    return(
        <>
            <div className={FiltersCSS.label}>
                {label}
            </div>
            <div>
                {
                    data != null && manufacturers().map(
                        (element, index) => <div key={index}><Checkbox onClick={() => setBrand(element)} checked={brand == element}>{element}</Checkbox></div>
                    )
                }
            </div>
        </>
    )
}