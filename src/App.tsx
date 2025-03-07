import React from "react";
import RouteConfig from "./routes/RouteConfig.tsx";

import { BrowserRouter } from "react-router-dom";


const App: React.FC = () => {
  return (
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>
  )
}
export default App;