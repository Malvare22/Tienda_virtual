import { Checkbox } from "antd";
import FiltersCSS from './Filters.module.css'

export default function Option({label, value, setValue}){
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