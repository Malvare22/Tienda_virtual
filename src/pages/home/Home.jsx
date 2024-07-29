import Filters from "/src/components/filters/Filters.jsx"
import HomeCSS from './Home.module.css'
import Banner from "../../components/banner/Banner";

function Home() {

  return (
    <div className={HomeCSS.container}>
          
      <Filters></Filters>
      <Banner></Banner>
    </div>
  )
}

export default Home
