import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/login';
import Register from './components/register';
import AddProduct from './components/addProduct';
import UpdateProduct from './components/updateProduct';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/add" component={AddProduct} />
        <Route path="/update" component={UpdateProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
