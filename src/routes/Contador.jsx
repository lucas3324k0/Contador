import Title from "../components/Title";
import Counter from "../components/Counter";
import UseContador from "../Hooks/UseContador";
import { useContext } from "react";
import { ContadorContexto } from "../context/ContadorContexto";
import { Navigate } from "react-router-dom";

const Contador = () => {
  const { event } = useContext(ContadorContexto);

  // Verifica se usuario esta navegando
  if (!event) return <Navigate to={"/"} />;
  console.log(event);

  const eventTitle = event.title;
  const eventColor = event.cor;
  const eventDate = event.date;

  const [dia, horas, minutos, segundos] = UseContador(eventDate);

  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="contador-container">
        <Counter title="Dias" number={dia} eventColor={eventColor} />
        <Counter title="Horas" number={horas} eventColor={eventColor} />
        <Counter title="Minutos" number={minutos} eventColor={eventColor} />
        <Counter title="Segundos" number={segundos} eventColor={eventColor} />
      </div>
    </>
  );
};

export default Contador;
