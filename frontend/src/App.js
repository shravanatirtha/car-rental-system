import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Auth/Signup";
import Signin from "./pages/Auth/Signin";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import Basket from "./pages/Basket";
import Error404 from "./pages/Error404";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Favor from "./pages/Favorites";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div id="content">
          <Switch>
            <Route path="/berryride" exact component={Products} />
            <Route path="/berryride/product/:product_id" component={ProductDetail} />
            <Route path="/berryride/signin" component={Signin} />
            <Route path="/berryride/signup" component={Signup} />
            <Route path="/berryride/contact" component={Contact} />
            <Route path="/berryride/basket" component={Basket} />
            <Route path="/berryride/favor" component={Favor} />

            <ProtectedRoute path="/berryride/profile" component={Profile} />
            <ProtectedRoute path="/berryride/admin" component={Admin} admin={true} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;