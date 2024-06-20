import { useContext } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { ContadorContexto } from "./context/ContadorContexto";
function App() {
  const { event } = useContext(ContadorContexto);

  let eventImage = null;
  if (event) eventImage = event.image;

  return (
    <>
      <div
        className="App"
        style={
          eventImage
            ? { backgroundImage: `url(${eventImage})` }
            : { backgroundColor: "black" }
        }
      >
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
