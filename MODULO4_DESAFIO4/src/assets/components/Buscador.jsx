import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Buscador = () => {
 /* const [busqueda, setBusqueda] = useState("");
  //Función de busqueda
  const buscador = (i) => {
    setBusqueda(i.target.value); // capturador de caracteres
  };

  //método de filtrado

  const filterResult = [];
  if (!buscador) {
    filterResult = theSimpsons;
  } else {
    filterResult = theSimpsons.filter((item) =>
      item.Nombre.toLowerCase().includes(buscador.toLocaleLowerCase())
    );
  }*/

  return (
    <Form >
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Ingresa el nombre del personaje "
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Buscar
      </Button>
    </Form>
  );
};

export default Buscador;
