import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


export default function ViewChatForm() {
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
        <div>View Chat</div>
        <div>
          <ul>
            <li>Calender showing when chats happened</li>
            <li>Search bar for searching for text in chats</li>
            <li>Chat Area for continuing chats</li>
            <li>link: Use chat to create Document/Documents</li>
            <li>link: Use chat to create Node/Nodes</li>
          </ul>
        </div>
      </Grid>


    </React.Fragment>
  );
}
