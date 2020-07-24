import React, { useState, useEffect } from "react";
import "./App.css";
import { MenuItem, FormControl, Select, Card } from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

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
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url =
      countryCode === "wolrdwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };

  return (
    <div className="app">
      <div className="app-left">
        <div className="app_header">
          <h1>COVID TRACKER</h1>
          <FormControl className="app_dropdown">
            <Select
              variant="outlined"
              onChange={displayCountry}
              value={country}
            >
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
        <div className="stats">
          <InfoBox
            title="Coronavirus Cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <InfoBox
            title="Recovered Cases"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <InfoBox
            title="Deaths Cases"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>
        <Map />
      </div>
      <Card className="app_right">
        <h2>Hello</h2>
      </Card>
    </div>
  );
}

export default App;
