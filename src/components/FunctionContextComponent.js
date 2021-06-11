import React, { useContext } from "react";
import { ThemeContext } from "../App";

const FunctionContextComponent = () => {
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "3rem",
    margin: "2rem",
  };

  return <div style={themeStyles}> Function Context Component</div>;
};

export default FunctionContextComponent;
