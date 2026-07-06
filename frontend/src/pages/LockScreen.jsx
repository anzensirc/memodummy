import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../components/common/Button";

import {

    verifyPin,

    login,

    isAuthenticated

} from "../utils/auth";

import "../styles/lock.css";

function LockScreen() {

    const navigate = useNavigate();

    const [pin, setPin] = useState("");

    const [error, setError] = useState("");

    if (isAuthenticated()) {

        navigate("/");

    }

    function handleSubmit(e) {

        e.preventDefault();

        if (verifyPin(pin)) {

            login();

            navigate("/");

            return;

        }

        setError("PIN salah");

        setPin("");

    }

    return (

        <div className="lock-container">

            <form
                className="lock-card"
                onSubmit={handleSubmit}
            >

                <h1>🔒 Memo</h1>

                <p>
                    Masukkan PIN untuk membuka aplikasi
                </p>

                <input
                    type="password"
                    maxLength={6}
                    value={pin}
                    onChange={(e) => {

                        setPin(e.target.value);
                        setError("");

                    }}
                    placeholder="••••••"
                    autoFocus
                />

                {

                    error &&

                    <div className="lock-error">

                        {error}

                    </div>

                }

                <Button type="submit">

                    Unlock

                </Button>

                <div className="lock-footer">

                    Secure Local Access

                </div>

            </form>

        </div>

    );

}

export default LockScreen;