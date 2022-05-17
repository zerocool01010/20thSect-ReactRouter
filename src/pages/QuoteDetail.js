import React, { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments'
const QuoteDetail = () => {
  const urlParam = useParams();
  console.log(urlParam.quoteId);
  return (
    <>
      <div>Quote detail is here with the author:</div>
      <p>{urlParam.quoteId}</p> {/* si le agrego la posicion al param, y queda por ejem quoteId[0] entonces pasa el primer char del string */}
      <Route path={`/quotes/${urlParam.quoteId}/comments`}>
        <Comments/>
      </Route>
    </>
  );
};

export default QuoteDetail;
