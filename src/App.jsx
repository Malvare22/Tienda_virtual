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

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home></Home>
      ),
    },
    {
      path: "product",
      element: (
        <Product></Product>
      ),
    },
  ]);

  return (
    <>
      <Header></Header>
          <RouterProvider router={router} />
        <Footer></Footer>
    </>
  )
}

export default App
