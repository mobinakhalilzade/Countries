import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CountryList({ countries }) {
  var dataList = Array.from(countries);
  let continents = ["Asia", "Africa", "North America", "South America", "Europe", "Oceania"];

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(dataList);
  const [search, setSearch] = useState();
  const [continent, setContinet] = useState();

  const selectContinent = event => {
    setContinet(event.target.value);
  };

  useEffect(() => {
    if (countries) {
      setData(Array.from(countries.countries));
    }
  }, [countries]);

  useEffect(() => {
    setFilteredData(data.filter(item => item.continents[0] === continent));
  }, [continent, data]);

  const searchCountry = event => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    let query = search?.toLowerCase();
    setFilteredData(data.filter(item => item.name.common.toLowerCase().includes(query)));
  }, [search, data]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between py-4 px-10">
        <input
          className="basis-1/4 placeholder:text-gray-500"
          placeholder="Search for a country"
          type={"search"}
          name={"search"}
          onChange={searchCountry}
        />
        <select
          className="basis-1/4 h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg
         appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-500"
          onChange={selectContinent}>
          <option value="">All</option>
          {continents.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 px-5">
        {(filteredData.length > 0 ? filteredData : data).map((item, index) => {
          return (
            <div key={index}>
              <Link to={`/country/${item.name.common}`} state={item}>
                <div className="w-full border border-slate-700 shadow-xl rounded cursor-pointer">
                  <img className="w-full h-36 mx-auto" src={item.flags.png} alt={item.flags.name} />
                  <div className="px-4 py-6">
                    <h3 className="mb-3 text-2xl leading-7">{item.name.common}</h3>
                    <div className="flex justify-start">
                      <p>Population: </p>
                      <small>{item.population}</small>
                    </div>
                    <div className="flex justify-start">
                      <p>Region: </p>
                      <small>{item.region}</small>
                    </div>
                    <div className="flex justify-start">
                      <p>Capital: </p>
                      <small>{item.capital ? item.capital[0] : ""}</small>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CountryList;
