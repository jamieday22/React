import logo from "./logo.svg";
import "./App.css";
import ListActorComponent from "./components/ListActorComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="header">
      <HeaderComponent />
      <div className="container">
        <ListActorComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
