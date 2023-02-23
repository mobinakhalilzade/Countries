import { useLocation, useNavigate } from "react-router-dom";

function Country() {
  const location = useLocation();
  const navigate = useNavigate();

  const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } =
    location.state;
  return (
    <div className="mt-5 px-4">
      <div className="m-3">
        <button type="button" className="p-3" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-around">
        <div className="my-auto">
          <img className="mx-auto" src={flags.png} alt={flags.alt} />
        </div>
        <div>
          <h2 className="my-5">{name.common}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-around">
            <div>
              <div className="flex mt-2">
                <p>Native Name:</p>
                <p className="font-light px-1">{name.common}</p>
              </div>
              <div className="flex mt-2">
                <p>Population:</p>
                <p className="font-light px-1">{population.toLocaleString()}</p>
              </div>
              <div className="flex mt-2">
                <p>Region:</p>
                <p className="font-light px-1">{region}</p>
              </div>
              <div className="flex mt-2">
                <p>Sub Region:</p>
                <p className="font-light px-1">{subregion}</p>
              </div>
              <div className="flex mt-2">
                <p>Capital:</p>
                <p className="font-light px-1">{capital[0]}</p>
              </div>
            </div>
            <div>
              <div className="flex mt-2">
                <p>Top Level Domain:</p>
                <p className="font-light px-1">{tld[0]}</p>
              </div>
              <div className="flex mt-2">
                <p>Currencies: </p>
                {Object.keys(currencies).map((object, i) => {
                  return (
                    <p className="font-light px-1" key={i}>
                      {currencies[object].name},
                    </p>
                  );
                })}
              </div>
              <div className="flex mt-2">
                <p>Languages: </p>
                {Object.keys(languages).map((object, i) => (
                  <p className="font-light px-1" key={i}>
                    {languages[object]},
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
            <p className="mt-1">Border Countries:</p>
            <div className="grid grid-cols-3 gap-2 my-1">
              {borders?.map(item => (
                <button className="text-sm py-1 shadow-lg mx-2" key={item}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
