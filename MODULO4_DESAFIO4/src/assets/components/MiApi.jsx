import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


const MiApi = () => {
  const [theSimpsons, setTheSimpsons] = useState([]);
  const getDataTheSimpsons = async () => {
    const urlApiTheSimpsons =
      "https://apisimpsons.fly.dev/api/personajes?limit=650";
    const resp = await fetch(urlApiTheSimpsons);
    const dataApi = await resp.json();
    //console.log(dataApi.docs);
    const apiFilter = dataApi.docs
      .map((i) => {
        return {
          Nombre: i.Nombre.trim(),
          Historia: i.Historia,
          Imagen: i.Imagen,
          Genero: i.Genero,
          Ocupacion: i.Ocupacion,
          id: i._id,
        };
      })
      .sort((a, b) => a.Nombre.localeCompare(b.Nombre));

    setTheSimpsons(apiFilter);
    //console.log(apiFilter);
  };
  useEffect(() => {
    getDataTheSimpsons();
  }, []);
  console.log(theSimpsons);

  return (
    <>
      <div className="container">
        {theSimpsons.map((simpsons, i) => (
          <div className="card-characters" key={i}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className="character-image"
                variant="top"
                src={simpsons.Imagen}//Imagen del personaje
                alt={simpsons.Nombre}//Alternativa si se rompe la imagen
              />
              <Card.Body>
                <Card.Title>{simpsons.Nombre}</Card.Title> //Nombre del personaj
                <Card.Text>{simpsons.Historia}</Card.Text> //Historia del personaje
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Ocupación: {simpsons.Ocupacion}</ListGroup.Item> //ocupacion del personaje
                <ListGroup.Item>Genero: {simpsons.Genero}</ListGroup.Item> //Genero del personaje
              </ListGroup>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default MiApi;
