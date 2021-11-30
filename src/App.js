import logo from "./logo.svg";
import "./App.css";
import Servoces from "./Pages/Home/Services/Servoces";
import Banner from "./Pages/Banner/Banner";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Service from "./Pages/Home/Service/Service";
import Booking from "./Pages/Booking/Booking";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./hooks/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
            </Route>
            <Route path="/home">
              <Banner></Banner>
            </Route>
            <Route path="/servoces">
              <Servoces></Servoces>
            </Route>
            <Route path="/booking/:userId">
              <Booking></Booking>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/footer">
              <Footer></Footer>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
