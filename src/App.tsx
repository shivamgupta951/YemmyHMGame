import Home from "./components/Home";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="min-h-screen flex flex-col bg-[#150303]">
      <Navbar />
      <div className="flex justify-around mt-28">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/info" element={<Info/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
