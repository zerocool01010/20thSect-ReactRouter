import react from "react";
import {Link} from 'react-router-dom'

const Products = () => {
  return (
    <section>
      <h2>Hello stranger! What are you buying? What are you selling?</h2>
      <ul>
          <li><Link to='products/p1'>Purchase a book</Link></li>
          <li><Link to='products/p2'>Purchase a carpet</Link></li>
          <li><Link to='products/p3'>Purchase an online course</Link></li>
      </ul>
    </section>
  );
};

export default Products;
