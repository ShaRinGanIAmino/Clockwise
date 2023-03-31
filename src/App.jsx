import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Men, Women, Contact, Basket } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen h-1/6 bg-secondary">
        <Navbar />
      </div>
      <div className=" w-screen h-5/6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Basket" element={<Basket />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
