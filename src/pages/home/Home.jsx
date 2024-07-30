import HomeCSS from './Home.module.css'
import Banner from "../../components/banner/Banner";
import Aside from './components/aside/Aside.jsx';
import SearchBar from './components/aside/filters/SearchBar.jsx';
import Categories from './components/aside/filters/Categories.jsx';
import ProductCard from '/src/components/products/ProductCard.jsx'
import { useContext, useEffect, useState } from 'react';
import {DataContext} from '/src/context/DataContext.jsx'

function Home() {

  const {data} = useContext(DataContext);

  const [search, setSearch] = useState('');

  const [category, setCategory] = useState(null);
  const filteredData = () => {
    let filtered = data;
    console.log(search)
    if(search.length != 0)  filtered = filtered.filter(p => (p['name'].toLowerCase()).includes(search.toLowerCase()));
    if(category != null)  filtered =  filtered.filter(p => (p['category'] == category));
    
    return filtered;
  }
  return (
    <div>
      <div className={HomeCSS.container}>
          <div>
            <Aside></Aside>
          </div>
          <div className={HomeCSS.col2}>
            <div className={HomeCSS.container_categories}>
              <SearchBar search={search} setSearch={setSearch}></SearchBar>
              <Categories category={category} setCategory={setCategory}></Categories>
            </div>
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
