import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div className="App">
      <button 
        style={{ backgroundColor: buttonColor }} 
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled} 
        >
          Change to {newButtonColor}
      </button>
      <input type="checkbox" 
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={e => setDisabled(e.target.checked)} 
      />
    </div>
  );
}

export default App;
