import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
            <Route path="/product/:id">
                <Product/>
            </Route>
            <Route path="/cart">
                <Cart/>
            </Route>
            <Route path="/checkout">
                <Checkout/>
            </Route>
        </Switch>
    </Router>
  );
};

export default App;
