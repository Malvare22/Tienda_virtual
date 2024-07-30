import HomeCSS from './Home.module.css'
import Banner from "../../components/banner/Banner";
import Aside from './components/aside/Aside.jsx';
import SearchBar from './components/aside/filters/SearchBar.jsx';
import Categories from './components/aside/filters/Categories.jsx';
import ProductCard from '/src/components/products/ProductCard.jsx'
import { useContext } from 'react';
import {DataContext} from '/src/context/DataContext.jsx'

function Home() {

  const {data} = useContext(DataContext);
  return (
    <div>
      <div className={HomeCSS.container}>
          <div>
            <Aside></Aside>
          </div>
          <div className={HomeCSS.col2}>
            <div className={HomeCSS.container_categories}>
              <SearchBar></SearchBar>
              <Categories></Categories>
            </div>
            <div className={HomeCSS.container_product}>
                {data != null && data['phones'].map((p, i) => <ProductCard key={i} name={p.name} price={p.price} discount={p.discount} review={p.reviews} img1={(p.img)[0]} img2={(p.img)[1]}></ProductCard>)}
            </div>
          </div>
      </div>
      <Banner></Banner>
    </div>
  )
}

export default Home
