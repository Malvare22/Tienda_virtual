import Search from 'antd/es/input/Search';
import FiltersCSS from './Filters.module.css'

export default function SearchBar(){

    const onSearch = (e) => console.log(e.target.value);

    return(
        <div className={FiltersCSS.search_bar}>
            <Search placeholder="input search text" onChange={onSearch} style={{ width: "400px" }} />
        </div>
    );
} 