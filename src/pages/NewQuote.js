import QuoteForm from '../components/quotes/QuoteForm'
import {useHistory} from 'react-router-dom'

const NewQuote = () => {
const history = useHistory() //nos devuelve un obj del historial que podemos guardar en una cte

    const onAddQuoteHandler = (quoteData) => {
        console.log(quoteData) //viene un obj = {author: 'at1', text: 'at2'}
        history.push('/quotes') //con esto hacemos navegar imperativamente de manera programatica al usuario cada vez que agrega un nuevo quote
    }

  return <QuoteForm onAddQuote={onAddQuoteHandler}/>
};

export default NewQuote;
