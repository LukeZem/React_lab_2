import React, { useState } from 'react';
import Sidebar from './components/Sidebar';


const App = () => {
  const [hideSidebar, setHideSidebar] = useState(false);

  const toggleSidebar = () => {
    setHideSidebar(!hideSidebar);
  };

  return (
    <div id="sidebar">
      <button id='toggle' onClick={toggleSidebar}>Toggle Sidebar</button>
      <Sidebar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
    </div>
  );
};

export default App;
