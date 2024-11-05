import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import AllNews from "./Components/AllNews";
import AddNews from "./Components/AddNews";
import TopNews from "./Components/TopNews";
import ViewNews from "./Components/ViewNews";
import UpdateNews from "./Components/UpdateNews";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-news" element={<AllNews />} />
        <Route path="/add-news" element={<AddNews />} />
        <Route path="/top-news" element={<TopNews />} />
        <Route path="/viewNews/:id" element={<ViewNews />} />  {/* Define ViewNews route */}
        <Route path="/updateNews/:id" element={<UpdateNews />} />  {/* UpdateNews route */}
      </Routes>
    </>
  );
};

export default App;


