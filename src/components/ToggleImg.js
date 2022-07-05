import react from 'react';
import {useState} from 'react';

const ToggleDivImage = () => {
    // let image = require("./GettyImages-1173556.jpeg")

    /* Setup component state that tracks visibility of the image. Initially, we'll set
    the image to visible (toggled true) */
    const [toggled, setToggled] = useState(true);
  
    /* Define a function that toggles the visibility of the image */
    const toggleImage = () => setToggled(!toggled);
  
    return (
      <div>
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage}>Toggle court</button>
        
        {/* Render image if toggled is truthy */}
        {toggled && <img src="" alt="bball" />}
      </div>
    );
  };

  export default ToggleDivImage