import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/login';
import Register from './components/register';
import AddProduct from './components/addProduct';
import UpdateProduct from './components/updateProduct';
import Protected from './components/Protected';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/add" >
          <Protected component={AddProduct} />
          </Route>
        <Route path="/update">
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
