import QuoteList from '../components/quotes/QuoteList'
const dummy_quotes = [
    { id: 'q1', author: 'the guy from Scream', text: 'it was FUN!'},
    { id: 'q2', author: 'Vincent Law', text: 'ware wa Ergo Proxy, the angel of death'},
    { id: 'q3', author: 'Yagami Light', text: 'Boku ga Kira, so shite, shinse ka no kami-da'}
]

const AllQuotes = () => {
  return <QuoteList quotes={dummy_quotes}/>;
};

export default AllQuotes;
