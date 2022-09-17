import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-pink-300">
        <header className="bg-stone-900 h-16 flex flex-wrap justify-between items-center ">
          <Link className="text-white ml-4" to="/">
            <strong>amazon.com</strong>
          </Link>
          <Link to="/" className="text-white text-bold">
            delivery adress
          </Link>
          <input
            type="text"
            className="h-10 w-96 p-2 outline-none rounded-md"
            placeholder="Search"
          />
          <Link to="/" className="text-bold text-white ">
            sign up
          </Link>
          <Link to="/" className="text-bold text-white ">
            return
          </Link>
          <Link to="/" className="text-bold text-white mr-4">
            cart
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
