import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./Header";
import CountryList from "./Country-list";
import Country from "./Country";

function App() {
  const [countries, getCountries] = useState("");

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    let res = await axios.get("https://restcountries.com/v3.1/all");
    getCountries({ countries: res.data });
  };

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<CountryList countries={countries} />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
