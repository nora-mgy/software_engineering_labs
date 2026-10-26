
import './App.css'
import ButtonExample from "./ButtonExample";
import ConditionalButtons from './ConditionalButtons';
import ImageExample from './ImageExample';

export default function App() {
  function handleClick() {
    alert("You clicked the green button!");
  }
  
  function handleRedClick() {
    alert("You clicked the red button!");
  }

  function handleBlueClick() {
    alert("You clicked the blue button!");
  }

  function handleImageClick() {
    alert("You clicked the image!");
  }
  

  return(
    <div>
      <h1>Props & Conditional Rendering Example</h1>

      <h2>Reusable Buttons</h2>
      <ButtonExample
        className="green-button"
        text="Click Me"
        onClick={handleClick}
      />

      <ButtonExample
        className="red-button"
        text="Don't Click Me"
        onClick={handleRedClick}
      />

      <ButtonExample
        className="blue-button"
        text="Save"
        onClick={handleBlueClick}
      />

      <h2>Conditional Buttons</h2>
      <ConditionalButtons loggedIn={true} />
      <ConditionalButtons loggedIn={false} />

      <h2>Image Example</h2>
      <ImageExample
        src="https://via.placeholder.com/200"
        alt="Example image"
        width="200"
        onClick={handleImageClick}
      />
    </div>
  );
}

