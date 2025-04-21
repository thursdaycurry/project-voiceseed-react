import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Playground from "./components/Playground";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div id="app" className="p-[50px] min-h-screen">
      <div className="bg-white mt-[10px] rounded-">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
