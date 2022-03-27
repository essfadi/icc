import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import meals from "./pages/meals";
import { Form } from "./pages/form";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/meals" component={meals} exact />
        <Route path="/form" component={Form} exact />
      </Switch>
    </Router>
  );
}

export default App;
