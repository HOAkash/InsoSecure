import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataContext"; // adjust path
import "./New.css";

function NewPolicy() {
  const { policies } = useContext(DataContext);

  return (
    <div className="new-policy-container">
      <PolicyHome products={policies} />
    </div>
  );
}

function PolicyHome({ products }) {
  return (
    <div>
      <PolicyBanner />
      <div className="new-policy-grid">
        <div className="new-policy-scroller">
          {products.map((product) => (
            <Link
              key={product.id}
              to={product.path}
              className="new-policy-card"
              style={{
                backgroundImage: `url(${product.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="new-policy-title">{product.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function PolicyBanner() {
  return (
    <div className="new-policy-banner">
      <div className="new-policy-banner-text">
        <h2>Select a Policy Type</h2>
        <p>Choose from our best insurance plans</p>
      </div>
      <div className="new-policy-banner-offer">Secure your future today!</div>
    </div>
  );
}

export default NewPolicy;
