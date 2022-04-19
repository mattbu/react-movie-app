import axios from "axios";
import { Routes, Route } from "react-router-dom";
import app from "./css/app.css";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
