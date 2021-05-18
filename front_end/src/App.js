import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/layout.scss";
import Header from "./components/layout/header/header";
import Main from "./pages/main/main";
import CreateMeal from "./pages/create_meal/create_meal";
import CreateWorkOut from "./pages/create_workout/create_workOut";
import Home from "./pages/home/home";
import Total from "./pages/total/total";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";

// import Meal from "./modals/meal/meal";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/main" component={Main} />
          <Route path="/total" component={Total} />
          <Route path="/meal" component={CreateMeal} />
          <Route path="/workout" component={CreateWorkOut} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
