import React, { useParams, Route, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = (props) => {
  //react router hooks
  const matchR = useRouteMatch()
  console.log(matchR) //trae un objeto con varios atributos relacionados al path en el que estamos parados

  const urlParam = useParams();
  console.log(urlParam); //si vengo desde el Link de QuoteItem entonces le llega un obj = {quoteInfo: 'elem1, elem2'}

  const paramsDiv = urlParam.quoteInfo.split(",", 2); //aca lo spliteo y devuelvo un arreglo de 2 posiciones
  /* console.log(paramsDiv) */ //el arreglo es = ['elem1', 'elem2']

  const quote = props.theQuotes.find((quote) => quote.id === paramsDiv[1]);
  console.log(quote);
  if (!quote) {
    return <p>No existing quote</p>;
  }

  return (
    <>
      <div>Quote detail is here with the author:</div>
      <p>{paramsDiv[0]}</p>
      <p>and the id: {paramsDiv[1]}</p>
      <p>
        The complete information will be rendered in the following component:
      </p>
      <HighQuote text={quote.text} author={quote.author} />
      <Route path={`/${matchR}/${urlParam.quoteInfo}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
