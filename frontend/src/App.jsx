import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Editor from "./pages/Editor";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/new"
                    element={<Editor />}
                />

                <Route
                    path="/edit/:id"
                    element={<Editor />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;