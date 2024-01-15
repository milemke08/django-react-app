import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// inital State of Node
const initialState = {
nodeData: {},
};

// create Node Slice
// export const projectFormSlice = createSlice({
//     name: "projectForm",
//     initialState: initialState,
//     reducers: {},
// });

export const NodeSlice = createSlice({
  name: "nodes",
  initialState: initialState,
  reducers: {
    // Reducers to handle state changes
    updateProjectData: (state, action) => {
      state.projectData = action.payload;
    },
    // other reducers...
    resetForm: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      // ... other cases ...
      .addCase(fetchNodes.fulfilled, (state, action) => {
        // Assuming action.payload returns the full project data including phases and tasks
        state.projectData = action.payload;
      });
  },
});

// Async thunk to fetch Nodes
export const fetchNodes = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/api/nodes/"); // Replace with your API endpoint
    const data = await response.json();
    // console.log(data)
    return data;
  }
);


export default NodeSlice.reducer;