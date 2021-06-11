import React, { useState } from "react";
import FunctionContextComponent from "./components/FunctionContextComponent";
import ClassContextComponent from "./components/ClassContextComponent";

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <center>
          <br />
          <br />
          <button onClick={toggleTheme}>Toggle Theme</button>
        </center>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
