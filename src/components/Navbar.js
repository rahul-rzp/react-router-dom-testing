import { Link } from "react-router-dom";
import { routes } from "../App";

const Navbar = () => {
  return (
    <nav>
      {routes.map((route) => (
        <Link to={route.path}>{route.text}</Link>
      ))}
    </nav>
  );
};

export default Navbar;
