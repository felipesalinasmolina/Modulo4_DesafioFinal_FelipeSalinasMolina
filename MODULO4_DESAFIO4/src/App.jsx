import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MiApi from "./assets/components/MiApi";

import Buscador from "./assets/components/Buscador";

function App() {
  return (
    <>
      <Buscador />
      <MiApi />
    </>
  );
}

export default App;
