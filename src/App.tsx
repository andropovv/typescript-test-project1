import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import Navbar from "./components/Navbar";

const App = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/users" element={<UsersPage />}/>
                <Route path="/todos" element={<TodosPage />}/>
                <Route path="/users/:id" element={<UserItemPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;