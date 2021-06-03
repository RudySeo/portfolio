import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/layout.scss";
import Header from "./components/layout/header/header";
import Main from "./pages/main/main";
import CreateMeal from "./pages/create_meal/create_meal";
import CreateWorkOut from "./pages/create_workout/create_workOut";
import Home from "./pages/home/home";
import Total from "./pages/total/total";
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import Auth from "./hoc/auth";

// import { store } from "../src/redux/store";
// import { Provider } from "react-redux";

// import Meal from "./modals/meal/meal";

function App() {
  return (
    // {/* // <Provider store={store}> */}
    <BrowserRouter>
      <Header />
      <Switch>
        <>
          <div className="container">
            <Route exact path="/" component={Auth(Home, null)}></Route>
            <Route path="/login" component={Auth(Login, false)}></Route>
            <Route path="/register" component={Auth(Register, false)} />
            <Route exact path="/total" component={Auth(Total, true)} />
            <Route path="/total/detail" component={Auth(Main, true)} />
            <Route path="/meal" component={Auth(CreateMeal, true)} />
            <Route path="/workout" component={Auth(CreateWorkOut, true)} />
          </div>
        </>
      </Switch>
    </BrowserRouter>
    // {/* // </Provider> */}
  );
}

export default App;

// test(true); // 1
// test(false); // 1, 2
// 1. test(); // console 1 2
// 2. console.log(foo); // "foo"

// type
// bolean true false
// number
// string
// null
// undefinde
// object - array, object

// function test(a) {
// 1. a는 어떤 타입의 값이 오는지
// 2. const foo = test(); foo 의 값은? 1 2



//   console.log("1");

//   if (a) {
//     return;
//   }

//   console.log("2");
// }
