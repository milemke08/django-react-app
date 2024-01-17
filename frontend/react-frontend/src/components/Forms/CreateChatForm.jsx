import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


export default function CreateChatForm() {
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
        <div>Create Chat</div>
        <div>
          <ul>
            <li>Blank Form for creating a new Ai chat</li>
            <li>Dropdown: select Model</li>
            <li>Text Area: Add context</li>
          </ul>
        </div>
      </Grid>


    </React.Fragment>
  );
}
