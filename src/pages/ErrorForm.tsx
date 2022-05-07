import colau from "/colau404.gif";
import { Error } from "../ui/Error";
import "./ErrorForm.css";

const ErrorForm = () => {
  return (
    <div className="container">
      <img className="error" src={colau} alt="Error 404" />
      <Error size="xl">404 Not Found</Error>
    </div>
  );
};

export default ErrorForm;
