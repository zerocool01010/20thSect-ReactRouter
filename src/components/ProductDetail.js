import React, { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>Some Detail about</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
