import { Link, useLocation } from "react-router-dom";

function Header() {

    const location = useLocation();

    const isDashboard = location.pathname === "/";

    return (

        <header className="header">

            <div className="header-container">

                <Link
                    to="/"
                    className="header-title"
                >
                    Memo
                </Link>

                {

                    !isDashboard && (

                        <Link
                            to="/"
                            className="header-back"
                        >
                            ← Dashboard
                        </Link>

                    )

                }

            </div>

        </header>

    );

}

export default Header;