import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import AddProduct from "./components/addProduct";
import UpdateProduct from "./components/updateProduct";
import Protected from "./components/Protected";
import ProductList from "./components/productList";
import SearchProduct from './components/searchProduct';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Protected component={ProductList} />
          </Route>
          <Route path="/add">
            <Protected component={AddProduct} />
          </Route>
          <Route path="/search">
            <Protected component={SearchProduct} />
          </Route>
          <Route path="/update/:id">
            <Protected component={UpdateProduct} />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
