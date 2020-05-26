import React, { useContext, useState } from "react";
import { plantcontext} from "../contexts/plantcontext"
import { usercontext} from "../contexts/usercontext"



const Addplant = () => {
  const { addplant } = useContext(plantcontext);
  //const { addplant } = useContext(usercontext);
  const [newplant, setNewplant] = useState({

  nickname:"",
  species:"",
  h2O_frequency:"",
  image_url:"",
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    addplant(newplant);
  };



  const handleChanges = (e) => {
    const plants = e.target.name;
   

    setNewplant({
      ...newplant,
      [plants]: e.target.value,
      // user_id:Date.now(),
      // id: Date.now(),
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="nickname"
          placeholder=" nickname"
          onChange={handleChanges}
        ></input>
        <input
          name="species"
          placeholder="species"
          type="text"
          onChange={handleChanges}
        ></input>
        <input
          name="h2O_frequency"
          placeholder="h2O_frequency"
          type="text"
          onChange={handleChanges}
        ></input>
        <input
          name="image_url"
          placeholder="image_url"
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