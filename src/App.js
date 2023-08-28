
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import FlatCommercialRoofing from "./routes/flatcommercialroofing/fcr.component";
import SteepArchRoofing from "./routes/steeparchroofing/sar";
import Masonry from "./routes/masonry/masonry.component";
import Slate from "./routes/slate/slate.component";
import Metal from "./routes/metal/metal.component";
import Maintenance from "./routes/maintenance/maintenance.component";
import KeyPersonnel from "./routes/keypersonnel/keypersonnel.component";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="fcr" element={<FlatCommercialRoofing />} />
        <Route path="sar" element={<SteepArchRoofing />} />
        <Route path="masonry" element={<Masonry />} />
        <Route path="slate" element={<Slate />} />
        <Route path="metal" element={<Metal />} /> 
        <Route path="maintenance" element={<Maintenance />} /> 
        <Route path="keypersonnel" element={<KeyPersonnel />} />
      </Route>
    </Routes>
  );
}

export default App;
