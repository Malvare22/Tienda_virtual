import HomeCSS from './Home.module.css'
import Banner from "../../components/banner/Banner";
import Aside from './components/aside/Aside.jsx';
import SearchBar from './components/aside/filters/SearchBar.jsx';
import Categories from './components/aside/filters/Categories.jsx';

function Home() {

  return (
    <div>
      <div className={HomeCSS.container}>
          <div>
            <Aside></Aside>
          </div>
          <div className={HomeCSS.container_categories}>
            <SearchBar></SearchBar>
            <Categories></Categories>
          </div>
      </div>
      <Banner></Banner>
    </div>
  )
}

export default Home
