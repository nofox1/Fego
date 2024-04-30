import ProductList from "../components/ProductList";
import ThemeMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <ThemeMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;