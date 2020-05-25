import React, { useContext, useState } from "react";
import { plantcontext } from "../contexts/plantcontext"


const Addplant = () => {
  const { addplant } = useContext(plantcontext);
  const [newplant, setNewplant] = useState({
    id:"",
  name: "",
  Nickname:"",
  Species:"",
  h2Ofrequency:"",
  Image:"",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addplant(newplant);
  };



  const handleChanges = (e) => {
    const plant = e.target.name;
    setNewplant({
      ...newplant,
      [plant]: e.target.value,
      id: Date.now(),
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChanges}
        ></input>
        <input
          type="text"
          name="Nickname"
          placeholder=" Nickname"
          onChange={handleChanges}
        ></input>
        <input
          name="Species"
          placeholder="Species"
          type="text"
          onChange={handleChanges}
        ></input>
        <input
          name="h2Ofrequency"
          placeholder="h2O frequency"
          type="text"
          onChange={handleChanges}
        ></input>
        <input
          name="Image"
          placeholder="Image"
          type="text"
          onChange={handleChanges}
        ></input>

        <button onClick={handleSubmit} type="submit">
          Add plant
        </button>
      </form>
    </div>
  );
};

export default Addplant;