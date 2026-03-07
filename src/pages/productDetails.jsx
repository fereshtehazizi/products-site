import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <section className="page-container">
        <h2>Product not found</h2>
        <Link to="/products" className="btn-primary">
          Back to Products
        </Link>
      </section>
    );
  }

  return (
    <section className="product-details">
      {product.bg && ( <video autoPlay loop playsInline className="details-bg-video" src={product.bg} /> )}
      <div className="details-content text-start">
        <h1 className="details-title">{product.name}</h1>
        <p className="details-price text-1xl text-bold">${Number(product.price).toLocaleString()}</p>
        <div className="items-center details-bane mb-2">
              <span className="details.category">{product.category}</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                <span className="text-sm">{product.rating}</span>
              </div>
            </div>
        <p className="details-spec">{product.specs}</p>
        <p className="details-description">{product.description}</p>

        <div className="product-actions">
          <button className="btn-outline" onClick={() => navigate(-1)}>
            Back to Products
          </button>
          <button className="btn-primary" onClick={() => navigate("/checkout")}>
            Buy Now!
          </button>
        </div>
      </div>
    </section>
  );
}

