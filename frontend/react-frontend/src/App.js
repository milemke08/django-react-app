
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NodesPage from "./pages/NodesPage";
import MainAppLayout from "./components/Header/MainAppLayout";
import ChatsPage from "./pages/ChatsPage"

import DocumentsPage from "./pages/DocumentsPage"
import AccountPage from "./pages/AccountPage"



function App() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
   
    <MainAppLayout toggleDrawer={toggleDrawer} open={open}>
      <Routes>
        <Route path="/" exact  element={<HomePage />} />
        <Route path="/nodes" element={<NodesPage />} />
        <Route path="/chats" element={<ChatsPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        {/* <Route path="/integrations" element={<NodesPage />} /> */}
        <Route path="/account" element={<AccountPage />} />
       
      </Routes>
    </MainAppLayout>
  );
}

export default App;
