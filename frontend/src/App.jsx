import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Editor from "./pages/Editor";
import LockScreen from "./pages/LockScreen";

import ProtectedRoute from "./auth/ProtectedRoute";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/lock"
                    element={<LockScreen />}
                />

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/new"
                    element={
                        <ProtectedRoute>
                            <Editor />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/edit/:id"
                    element={
                        <ProtectedRoute>
                            <Editor />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;