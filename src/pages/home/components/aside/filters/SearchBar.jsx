import Search from 'antd/es/input/Search';
import FiltersCSS from './Filters.module.css'

export default function SearchBar({search, setSearch}){

    const onSearch = (e) => {
        setSearch(e.target.value)
    };
    return(
        <div className={FiltersCSS.search_bar}>
            <Search placeholder="input search text" onChange={onSearch} value={search} style={{ width: "400px" }} />
        </div>
    );
} 