
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import FlatCommercialRoofing from "./routes/flatcommercialroofing/fcr.component";
import SteepArchRoofing from "./routes/steeparchroofing/sar";
import Masonry from "./routes/masrony/masonry.component";
import Slate from "./routes/slate/slate.component";
import Waterproofing from "./routes/waterproofing/waterproofing.component";
import Maintenance from "./routes/maintenance/maintenance.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="category/1" element={<FlatCommercialRoofing />} />
        <Route path="category/2" element={<SteepArchRoofing />} />
        <Route path="category/3" element={<Masonry />} />
        <Route path="category/4" element={<Slate />} />
        <Route path="category/5" element={<Waterproofing />} /> 
        <Route path="category/6" element={<Maintenance />} /> 
      </Route>
    </Routes>
  );
}

export default App;
