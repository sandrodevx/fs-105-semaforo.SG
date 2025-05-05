import React, { useState } from 'react';
import '../../styles/index.css';

const COLORS = {
  RED: 'red',
  YELLOW: 'yellow',
  GREEN: 'green',
  PURPLE: 'purple'
};

const DEFAULT_COLORS = [COLORS.RED, COLORS.YELLOW, COLORS.GREEN];

export const Home = () => {
  const [activeColor, setActiveColor] = useState(COLORS.RED);
  const [colors, setColors] = useState(DEFAULT_COLORS);

  const handleNextColor = () => {
    const currentIndex = colors.indexOf(activeColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setActiveColor(colors[nextIndex]);
  };

  const handleAddPurple = () => {
    if (!colors.includes(COLORS.PURPLE)) {
      setColors([...colors, COLORS.PURPLE]);
    }
  };

  return (
    <div className="traffic-light-container">
      <div className="traffic-light-system">
        <div className="traffic-light-pole" />
        <div className="traffic-light">
          {colors.map(color => (
            <div
              key={color}
              className={`light ${color} ${activeColor === color ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
      
      <div className="controls">
        <button 
          onClick={handleNextColor}
          className="control-button change-color-button"
        >
          Cambiar color
        </button>
        
        <button 
          onClick={handleAddPurple}
          className={`control-button ${colors.includes(COLORS.PURPLE) ? 'purple-added' : 'add-purple'}`}
          disabled={colors.includes(COLORS.PURPLE)}
        >
          {colors.includes(COLORS.PURPLE) ? '✅ Púrpura añadido' : '➕ Añadir púrpura'}
        </button>
      </div>
    </div>
  );
};

export default Home;