import FiltersCSS from './Filters.module.css'

export default function Cost({range, setBrand}){
    const handleInput = (e, pos) => {
        const newRange = [...range];
        const value = (e.target.value)
        newRange[pos] = value;
        setBrand(newRange);
    }

    return(
        <div>
            <div className={FiltersCSS.label}>
                Precio
            </div>
            <div className={FiltersCSS.input_range}>
                <input type='number' onChange={(e) => handleInput(e, 0)} value={range[0]}></input><div>-</div><input type='number' onChange={(e) =>handleInput(e, 1)} value={range[1]}></input>
            </div>
        </div>
    )
}