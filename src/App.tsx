import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./pages/Categories/Categories";
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Categories" component={Categories} />
          <Categories />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
