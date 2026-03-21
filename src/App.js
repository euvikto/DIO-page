import Home  from "./pages/home";
import Login  from "./pages/login";
import Feed  from "./pages/feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadaster from "./pages/cadaster";
function App() {
  return (
    <Router>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/cadaster" element={<Cadaster /> } />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/feed" element={<Feed />} />{" "}
      </Routes>{" "}
    </Router>
  );
}
export default App;
