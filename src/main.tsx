import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import "./style.css";
import HomeView from "./views/home";
import ConfigEditor from "./views/configEditor";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<HomeView/>}/>
              <Route path={'/config'} element={<ConfigEditor/>}/>
          </Routes>

      </BrowserRouter>
  </React.StrictMode>
);
