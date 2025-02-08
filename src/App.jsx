import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProductDetail from "./pages/ProductDetail";

function App() {

  return (
  <>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
