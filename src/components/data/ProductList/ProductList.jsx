import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../product'; // fayl yo'lini loyihangizga qarab tekshiring

function ProductList() {
  return (
    <div className="container my-5">
      <div className="card-deck d-flex flex-wrap justify-content-center gap-4">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
