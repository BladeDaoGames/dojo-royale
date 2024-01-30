import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BaseDojoTest } from "./pages/TestPages/BaseDojoTest";
import { AccountsTest } from "./pages/TestPages/AccountsTest";
import { MockLobby } from "./pages/TestPages/MockLobby";

function App() {
    
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/dojomaintest" element={<BaseDojoTest/>}/>
                <Route path="/accountstest" element={<AccountsTest/>}/>
                <Route path="/mocklobby" element={<MockLobby/>}/>
            </Routes>
        </Router>
    );
}

export default App;
