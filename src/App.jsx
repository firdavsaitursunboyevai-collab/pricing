import React from 'react';
import ProductList from './components/data/ProductList/ProductList';



function App() {
  return (
    <div className="pricing-page">
      <div className="text-center py-5">
        <h1 className="display-4">Pricing</h1>
        <p className="lead text-muted">
          Quickly build an effective pricing table for your potential customers with this Bootstrap example.
        </p>
      </div>
      
      <ProductList />
    </div>
  );
}

export default App;
