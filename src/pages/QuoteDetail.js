import React, { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments'
const QuoteDetail = () => {
  const urlParam = useParams();
  console.log(urlParam); //si vengo desde el Link de QuoteItem entonces le llega un obj = {quoteId: 'elem1, elem2'}

  const paramsDiv = urlParam.quoteId.split(',', 2) //aca lo spliteo y devuelvo un arreglo de 2 posiciones
  /* console.log(paramsDiv) */ //el arreglo es = ['elem1', 'elem2']

  return (
    <>
      <div>Quote detail is here with the author:</div>
      <p>{paramsDiv[0]}</p>
      <p>and the id: {paramsDiv[1]}</p>
      <Route path={`/quotes/${urlParam.quoteId}/comments`}>
        <Comments/>
      </Route>
    </>
  );
};

export default QuoteDetail;
