import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <>
      <h2>404 Page Not Found</h2>
      <p>Invalid URL: {location.pathname}</p>
    </>
  );
}

export default NotFound;
