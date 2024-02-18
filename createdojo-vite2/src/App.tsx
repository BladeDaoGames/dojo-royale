import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home as TestHome } from "./pages/Home";
import { Home, WaitingRoom, GameRoom } from "./pages";
import { BaseDojoTest } from "./pages/TestPages/BaseDojoTest";
import { AccountsTest } from "./pages/TestPages/AccountsTest";
import { MockLobby } from "./pages/TestPages/MockLobby";
import { ROUTES } from "./constants/routing/routePath";

function App() {
    
    return (
        <Router>
            <Routes>
                {/* <Route path='/' element={<Home/>}/> */}
                <Route path={ROUTES.home} element={<Home />} />
                <Route path={ROUTES.waiting} element={<WaitingRoom />} />
                <Route path={ROUTES.inGame} element={<GameRoom />}/>
                <Route path="/dojomaintest" element={<BaseDojoTest/>}/>
                <Route path="/accountstest" element={<AccountsTest/>}/>
                <Route path="/mocklobby" element={<MockLobby/>}/>
            </Routes>
        </Router>
    );
}

export default App;
