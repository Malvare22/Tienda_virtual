import './App.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './pages/home/Home.jsx'
import Product from './pages/product/Product.jsx';
import { useEffect, useState } from 'react';
import { getData } from '/src/services/data.js';
import {DataContext} from '/src/context/DataContext.jsx';
import ProductModal from './components/products/ProductModal.jsx';

function App() {

  const [data, setData] = useState(null);

  useEffect(
     () => {
      const get = async () => {
        setData(await getData());
      };
      get();
    }, []
  )

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header></Header>
          <Home></Home>
          <Footer></Footer>

        </>
      ),
    },
    {
      path: "product",
      element: (
        <>
          <Header></Header>
          <Product></Product>
          <Footer></Footer>
        </>
      ),
    },
    {
      path: "test",
      element: (
        <>
          <Header></Header>
          <ProductModal></ProductModal>
          <Footer></Footer>
        </>
      ),
    }
  ]);

  return (
    <>
          <DataContext.Provider value={{data}}>
            <RouterProvider router={router} />
          </DataContext.Provider>
    </>
  )
}

export default App
