import { useState } from 'react';

export function ToggleSwitch() {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="App">
      <button
        className={`toggle-btn ${toggled ? 'toggled' : ''}`} // if toggled state is true add the toggled state as a string. If not add nothing
        onClick={() => setToggled(!toggled)}>
        <div className="thumb"></div>
      </button>
    </div>
  );
}
