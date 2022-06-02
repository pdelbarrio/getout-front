// import colau from "/colau404.gif";
import { Error, ErrorContainer } from "../ui/Error";

const ErrorForm = () => {
  return (
    <ErrorContainer>
      {/* <img className="error" src={colau} alt="Error 404" /> */}
      <Error size="l">404 | Not Found</Error>
    </ErrorContainer>
  );
};

export default ErrorForm;
