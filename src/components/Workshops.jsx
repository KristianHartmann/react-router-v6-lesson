import { Outlet, Link } from "react-router-dom";
import {getWorkshops} from "../api";

export default function Workshops() {
    const workshops = getWorkshops();
    return (
        <div className="container">
            <h1>Workshop Categories</h1>
            <ul className="workshops">
                {workshops.map(work => (
                     <Link to={work.id}>
                     <li key={work.id}>
                         {work.name}
                     </li>
                 </Link>
                ))}
            </ul>
            <Outlet></Outlet>

        </div>
    );

}
