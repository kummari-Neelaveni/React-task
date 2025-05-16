import React, { useState } from 'react';

const Theme = () => {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div style={{ backgroundColor: theme ? 'black' : 'white', height: '100vh', color: theme ? 'white' : 'black' }}>
      <button onClick={handleTheme}>
        {theme ? 'Switch to White Theme' : 'Switch to Black Theme'}
      </button>
    </div>
  );
};

export default Theme;

