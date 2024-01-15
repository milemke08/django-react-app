import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


export default function CreateNodeForm() {
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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="nodeName"
            label="Node Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          /> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Parent Node"
            onChange={handleChange}
            displayEmpty // Important for showing the placeholder when the value is empty
          >
            <MenuItem value="Parent Node" disabled>
              Parent Node
            </MenuItem>
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
            <MenuItem value={30}>Option 3</MenuItem>
            {/* Add more MenuItem components for more options */}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Description"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            multiline
            rows={4} // Adjust the number of rows as needed
          />
        </Grid>
        
      </Grid>


    </React.Fragment>
  );
}
