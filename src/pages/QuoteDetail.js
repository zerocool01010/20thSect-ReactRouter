import React, { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments'
const QuoteDetail = () => {
  const urlParam = useParams();
  console.log(urlParam.quoteId);
  return (
    <>
      <div>Quote detail is here: </div>
      <Route path={`/quotes/${urlParam.quoteId}/comments`}>
        <Comments/>
      </Route>
    </>
  );
};

export default QuoteDetail;
