import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TreeviewContainer from "../Containers/TreeviewContainer";


export default function ViewNodeForm() {
  const [value, setValue] = useState("Parent Node"); // Replace '' with your default value

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const treeData = {
    "Main": {
      "Hello": null,
      "Subtree with children": {
        "Hello": null,
        "Sub-subtree with children": {
          "Child 1": null,
          "Child 2": null,
          "Child 3": null
        },
        "Hello again": null
      },
      "World": {
        "Child 1": null,
        "Child 2": null,
        "Child 3": null
      },
      "Something something": null
    }
  };

  return (
    <React.Fragment>

      {/* <Typography variant="h6" gutterBottom>
        Create Node
      </Typography> */}
      <Grid container spacing={3}>
        <div>Node View</div>
        <div>
          <ul>
            <li>Tree view of Nodes</li>
            <li>Tree organized by node parents</li>
            <li>Node (leaf) shows attached dependency/documents</li>
            <TreeviewContainer data={treeData}  />
          </ul>
        </div>
      </Grid>


    </React.Fragment>
  );
}
