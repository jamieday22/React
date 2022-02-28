import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListActorComponent from "./components/ListActorComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListFilmComponent from "./components/ListFilmComponent";
import ListCategoryComponent from "./components/ListCategoryComponent";
import ListLanguageComponent from "./components/ListLanguageComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListActorComponent}></Route>
            <Route
              path="/categorys"
              exact
              component={ListCategoryComponent}
            ></Route>
            <Route path="/films" component={ListFilmComponent}></Route>
            <Route path="/languages" component={ListLanguageComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
