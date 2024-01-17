import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


export default function ViewDocumentForm() {
  const [value, setValue] = useState("Parent Node"); // Replace '' with your default value

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <React.Fragment>

      {/* <Typography variant="h6" gutterBottom>
        Create Node
      </Typography> */}
      <Grid container spacing={3}>
        <div>View Document</div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </Grid>


    </React.Fragment>
  );
}
