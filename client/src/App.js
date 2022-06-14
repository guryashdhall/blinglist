import React from "react";
import {Container} from '@material-ui/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";


const App = () => {

    return (
        <BrowserRouter>
            <Container maxwidth="xl">
                <Navbar />
            
                <Routes>
                    <Route />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;