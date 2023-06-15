import FormularioLogin from "./components/FormularioLogin";
import FormularioRegistro from "./components/FormularioRegistro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Api from "./components/Api";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FormularioRegistro />} />
          <Route path="/login" element={<FormularioLogin />} />
          <Route path="/user" element={<MainPage />} />
          <Route path="/api" element={<Api />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
