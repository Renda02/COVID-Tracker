import React from "react";
import "./App.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";

function App() {
  return (
    <div className="app">
      <div className="app_header">
        Hello World
        <FormControl>
          <Select variant="outlined" value="abc">
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">One</MenuItem>
            <MenuItem value="worldwide">Two</MenuItem>
          </Select>
        </FormControl>
        {/*Header */}
        {/*Title +Select input dropdown*/}
        {/*InfoBoxs*/}
        {/*InfoBoxs*/}
        {/*InfoBoxs*/}
        {/*Table*/}
        {/*Graph*/}
        {/*Map*/}
      </div>
    </div>
  );
}

export default App;
