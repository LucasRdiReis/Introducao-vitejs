import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/index.jsx";
import Exemplo01 from "./pages/exemplos/ex-01/index.jsx";
import Exemplo02 from "./pages/exemplos/ex-02/index.jsx";
import Exemplo03 from "./pages/exemplos/ex-03/index.jsx";
import Exemplo04 from "./pages/exemplos/ex-04/index.jsx";
import Exemplo05 from "./pages/exemplos/ex-05/index.jsx";
import Exemplo06 from "./pages/exemplos/ex-06/index.jsx";
import Exemplo07 from "./pages/exemplos/ex-07/index.jsx";
import Exemplo08 from "./pages/exemplos/ex-08/index.jsx";
import Exemplo09 from "./pages/exemplos/ex-09/index.jsx";
import Exemplo10 from "./pages/exemplos/ex-10/index.jsx";
import Exemplo11 from "./pages/exemplos/ex-11/index.jsx";
import Exemplo12 from "./pages/exemplos/ex-12/index.jsx";
import Exemplo13 from "./pages/exemplos/ex-13/index.jsx";
import Exemplo14 from "./pages/exemplos/ex-14/index.jsx";
import Atividade01 from "./pages/atividades/atv01/index.jsx";
import Atividade02 from "./pages/atividades/atv02/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exemplo/1" element={<Exemplo01 />} />
      <Route path="/exemplo/2" element={<Exemplo02 />} />
      <Route path="/exemplo/3" element={<Exemplo03 />} />
      <Route path="/exemplo/4" element={<Exemplo04 />} />
      <Route path="/exemplo/5" element={<Exemplo05 />} />
      <Route path="/exemplo/6" element={<Exemplo06 />} />
      <Route path="/exemplo/7" element={<Exemplo07 />} />
      <Route path="/exemplo/8" element={<Exemplo08 />} />
      <Route path="/exemplo/9" element={<Exemplo09 />} />
      <Route path="/exemplo/10" element={<Exemplo10 />} />
      <Route path="/atividade/1" element={<Atividade01 />} />
      <Route path="/atividade/2" element={<Atividade02 />} />
    </Routes>
  );
}

export default App;
