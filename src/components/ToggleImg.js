import react from 'react';
import {useState} from 'react';

const ToggleDivImage = () => {

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
        {toggled && <img src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F0217%2Fr181550_1023x576_16%2D9.jpg&w=1140&cquality=40&format=jpg" alt="Cat" />}
      </div>
    );
  };

  export default ToggleDivImage