import HomeCSS from './Home.module.css'
import Banner from "../../components/banner/Banner";
import Aside from './components/aside/Aside.jsx';
import SearchBar from './components/aside/filters/SearchBar.jsx';
import Categories from './components/aside/filters/Categories.jsx';
import ProductCard from '/src/components/products/ProductCard.jsx'
import { useContext, useEffect, useState } from 'react';
import {DataContext} from '/src/context/DataContext.jsx'
import { sorterFunctions } from '../../utilities/sorterFunctions.js';
import { useSearchParams } from 'react-router-dom';
import ProductModal from '/src/components/products/ProductModal'

function Home() {

  const [searchParams] = useSearchParams();
  const aux = searchParams.get('category');

  const {data} = useContext(DataContext);

  const [search, setSearch] = useState('');

  const [category, setCategory] = useState(null);

  const [sort, setSort] = useState(0);

  useEffect(
    () => {
      if(aux != null) setCategory(aux);

    }, [aux]
  )

  const filteredData = () => {
    let filtered = data;
    if(search.length != 0)  filtered = filtered.filter(p => (p['name'].toLowerCase()).includes(search.toLowerCase()));
    if(category != null)  filtered =  filtered.filter(p => (p['category'] == category));
    if(sort != 0) {
      filtered.sort(sorterFunctions[sort - 1]);
    }
    return filtered;
  }
  return (
    <div>
    <ProductModal></ProductModal>
      <div className={HomeCSS.container}>
          <div>
            <Aside sort={sort} setSort={setSort}></Aside>
          </div>
          <div className={HomeCSS.col2}>
            <div className={HomeCSS.container_categories}>
              <SearchBar search={search} setSearch={setSearch}></SearchBar>
              <Categories category={category} setCategory={setCategory}></Categories>
            </div>
            {/**Estos son los productos */}
            <div className={HomeCSS.container_product}>
                {data != null && filteredData().map((p, i) => <ProductCard key={i} id={p.id} name={p.name} price={p.price} discount={p.discount} review={p.reviews} img1={(p.img)[0]} img2={(p.img)[1]}></ProductCard>)}
            </div>
          </div>
      </div>
      <Banner></Banner>
    </div>
  )
}

export default Home
