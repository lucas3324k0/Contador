import { useState } from "react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContadorContexto } from "../context/ContadorContexto";
import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [cor, setCor] = useState();

  const { setEvent } = useContext(ContadorContexto);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // valores input
    const eventObject = {
      title,
      date,
      image,
      cor,
    };

    setEvent(eventObject);
    navigate("/contador");
  };

  return (
    <div>
      <h1 className="home">
        <h2>Monte a sua contaagem regressiva</h2>
        <form className="contador-form" onSubmit={handleSubmit}>
          <label>
            <span>Titulo:</span>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Digite o titulo do evento"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Data:</span>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Image:</span>
            <input
              type="text"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label>
            <span>Cor tema:</span>
            <input
              type="color"
              name="color"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
              required
            />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </h1>
    </div>
  );
};

export default Home;
