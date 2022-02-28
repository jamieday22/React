import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListFilmComponent from "./components/ListFilmComponent";
import ListCategoryComponent from "./components/ListCategoryComponent";
import ListLanguageComponent from "./components/ListLanguageComponent";
import ListReviewComponent from "./components/ListReviewComponent";
import CreateReviewComponent from "./components/CreateReviewComponent";
import UpdateReviewComponent from "./components/UpdateReviewComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListReviewComponent}></Route>
            <Route
              path="/categorys"
              exact
              component={ListCategoryComponent}
            ></Route>
            <Route path="/films" component={ListFilmComponent}></Route>
            <Route path="/reviews" component={ListReviewComponent}></Route>
            <Route
              path="/add-reviews"
              component={CreateReviewComponent}
            ></Route>
            <Route
              path="/update-review/:review_id"
              component={UpdateReviewComponent}
            ></Route>
            <Route path="/languages" component={ListLanguageComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
