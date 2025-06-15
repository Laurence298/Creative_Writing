import { Link } from "react-router";

export function NavBar() {

return (
<>
 <header>
        <div className="container">
            <nav>
                <h1 className="logo">Waywards</h1>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </div>
    </header>
</>
)
}