import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory()
  const location = useLocation() //nos devuelve un objeto con info de la locacion actual del usuario en la pagina
  console.log(location)

  const queryParams = new URLSearchParams(location.search) //not a react feature, it's a JS constructor //le pasamos por param uno de los atributos del location
  console.log(queryParams) //devuelve una clase de objeto complejo con un monton de methods para usar

  const sortAsc = queryParams.get('sort') === 'asc' //podemos llamar el method Get() que 
  // evalua uno de los key parameters de url que tiene su valor guardado porque en la url esta con un = al lado (sort=value)
  console.log(sortAsc) //devuelve un booleano

  const sortedQuotes = sortQuotes(props.quotes, sortAsc)

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={() => {
          history.push(`${location.pathname}?sort=${(sortAsc ? 'desc' : 'asc')}`) //chequeo que si sortAsc es true (o sea, que es 'asc') entonces le cambie el key param a 'desc' y sino lo hace al reves
        }}>Sort {sortAsc ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
