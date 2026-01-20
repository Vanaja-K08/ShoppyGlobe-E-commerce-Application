import { useLocation, Link } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Page not found: {location.pathname}</p>
      <Link to="/">
        <button className="btn btn-primary">Go Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
