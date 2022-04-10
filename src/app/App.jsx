import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Individual from "./pages/Individual";
import store from "./redux/store";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<Individual />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
