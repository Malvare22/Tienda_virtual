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
import ProductRelated from '../../components/products/ProductRelated.jsx';
import { getManufacturers } from '../../utilities/getManufacturers.js';
import getReviewAverage from '../../utilities/getReviewAverage.js';

function Home() {

  const [searchParams] = useSearchParams();
  const aux = searchParams.get('category');

  const {data, currentProduct, setCurrentProduct} = useContext(DataContext);

  const [search, setSearch] = useState('');

  const [category, setCategory] = useState(null);

  const [sort, setSort] = useState(0);

  const [brand, setBrand] = useState('');

  const [range, setRange] = useState(['', '']);

  const [score, setScore] = useState(0);

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
    if(brand != ''){
      filtered = filtered.filter(p => (p['manufacturer'] == brand));
    }
    if(range[0] != '' && range[1] != ''){
      filtered = filtered.filter(p => ((p['price'] >= range[0]) && (p['price'] <= range[1])));
    }
    if(score != 0){
      filtered = filtered.filter(p => (getReviewAverage(p['reviews']) == score));
    }
    return filtered;
  }
  return (
    <div>
      <div className={HomeCSS.container}>
          <div>
            <Aside sort={sort} setSort={setSort} brand={brand} setBrand={setBrand} range={range} setRange={setRange} score={score} setScore={setScore}></Aside>
          </div>
          <div className={HomeCSS.col2}>
            <div className={HomeCSS.container_categories}>
              <SearchBar search={search} setSearch={setSearch}></SearchBar>
              <Categories category={category} setCategory={setCategory}></Categories>
            </div>
            {/**Estos son los productos */}
            <div className={HomeCSS.container_product}>
                {data != null && filteredData().map((p, i) => <ProductCard key={i} product={p}></ProductCard>)}
            </div>
          </div>
      </div>
      <Banner></Banner>
      <ProductRelated type={2}></ProductRelated>
    </div>
  )
}

export default Home
