import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card mb-4 shadow-sm text-center" style={{ minWidth: "250px", flex: "1" }}>
      <div className="card-header py-3">
        <h4 className="my-0 font-weight-normal">{product.title}</h4>
      </div>
      <div className="card-body d-flex flex-column">
        <h1 className="card-title pricing-card-title">
          ${product.price} <small className="text-muted">/ mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4 flex-grow-1">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button 
          type="button" 
          className={`btn btn-lg btn-block ${product.buttonOutline ? 'btn-outline-primary' : 'btn-primary'}`}
        >
          {product.buttonText}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
