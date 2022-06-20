import { useState } from "react";
import { ThemeContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");
  const creator = "Bauyrzhan";
  const handleCreateFan = ({ name }) => {
    setFan(name);
  };
  const [darkTheme, setDarkTheme] = useState(false);

  return (
<ThemeContext.Provider value={{darkTheme}} >
    <Header fan={fan} />
      <hr />
      <Content />
      <hr />
      <Footer creator={creator} />
</ThemeContext.Provider>
    
  );
}
