import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/index.jsx";
import Exemplo01 from "./pages/exemplos/ex-01/index.jsx";
import Exemplo02 from "./pages/exemplos/ex-02/index.jsx";
import Atividade01 from "./pages/atividades/atv01/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exemplo/1" element={<Exemplo01 />} />
      <Route path="/exemplo/2" element={<Exemplo02 />} />
      <Route path="/atividade/1" element={<Atividade01 />} />
    </Routes>
  );
}

export default App;
