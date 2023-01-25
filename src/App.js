import React from "react";
import { useSelector } from "react-redux";
import DarkModeSwitcher from "./components/dark-mode/dark-mode-switcher";
import LangSwitcher from "./components/lang-switcher/lang-switcher";

import "./App.css";
import { $t } from "./helpers/locale-helper";

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const currentLang=useSelector(state=> state.locale.lang)


  return (
    <div className={darkMode?"dark": ""}>
      <DarkModeSwitcher />
      <LangSwitcher />

      <h2>{$t("hello-world")}</h2>
      
    </div>
  );
};

export default App;
