import FiltersCSS from './Filters.module.css'

export default function Cost({value, setValue}){
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