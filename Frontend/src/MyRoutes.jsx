import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Gallery from "./pages/Gallery";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/gallery" element={<Gallery/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
