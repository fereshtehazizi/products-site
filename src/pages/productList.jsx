import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductsList() {
  return (
      <>
      <div className="header">
        <h2 className="text-center font-bold m-3" style={{fontSize: 40, fontFamily: "Orbitron"}}>Product Gallery</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
        {products.map((product) => (
          <div key={product.id} className="gallery-card cursor-pointer group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow scroll-fade" style={{backgroundImage: `url(${product.image})`,}}> 
              <h3 className="gallery-title">{product.name}</h3>
              <div className="gallery-card-content">
                <div>
                  <p className="text-1xl opacity-90 mb-1">{product.category}</p>
                </div>
                <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold">${Number(product.price).toLocaleString()}</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                <span className="text-sm">{product.rating}</span>
              </div>
            </div>
              <Link to={product.id} className="details-btn">
                View Details
              </Link>
              </div>
          </div>
        ))}
      </div>
      </>
  );
}