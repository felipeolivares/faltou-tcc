import { AppContextProvider } from "context/contextProvider";
import React from "react";
import Router from "routes/router";
import "./styles/main.scss";

const App: React.FC = () => {
  return (
    <div className="app-color">
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </div>
  );
};

export default App;
