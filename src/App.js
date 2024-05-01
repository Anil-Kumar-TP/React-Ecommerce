import { productsData } from "./api/Api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { BrowserRouter, Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader:productsData,
      },
      {
        path: '/product/:productId',
        element:<Product/>,
      },
      {
        path: '/cart',
        element:<Cart/>,
      },
    ]
  }
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
