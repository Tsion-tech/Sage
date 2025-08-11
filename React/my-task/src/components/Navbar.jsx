import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/AddTask">Add Task</Link>
            <h1>My Task App</h1>
        </div>

    );
}