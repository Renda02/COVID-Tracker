import React, { useState, useEffect } from "react";
import "./App.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getcountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //Unitesd States
            value: country.countryInfo.iso2, //US
          }));
          setCountries(countries);
        });
    };
    getcountriesData();
  }, []);

  const displayCountry = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="app">
      <div className="app_header">
        <h1>COVID TRACKER</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" onChange={displayCountry} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>

            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
            {/*<MenuItem value="worldwide">Worldwide</MenuItem>
        <MenuItem value="worldwide">One</MenuItem>
          <MenuItem value="worldwide">Two</MenuItem>*/}
          </Select>
        </FormControl>{" "}
      </div>
      <div className="stats"></div>

      {/*<h1>COVID TRACKER</h1>
        
        <FormControl>
          <Select variant="outlined" value="abc">
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">One</MenuItem>
            <MenuItem value="worldwide">Two</MenuItem>
          </Select>
        </FormControl>*/}
      {/*Header */}
      {/*Title +Select input dropdown*/}
      {/*InfoBoxs*/}
      {/*InfoBoxs*/}
      {/*InfoBoxs*/}
      {/*Table*/}
      {/*Graph*/}
      {/*Map*/}
    </div>
  );
}

export default App;
