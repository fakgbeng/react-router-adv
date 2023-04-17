import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="centered flex">
      <h1>Page Not Found!</h1>
      <div>
        <h3>Kindly go back Quotes!</h3>
        <Link to="/quotes" className="btn">
          Quotes
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
