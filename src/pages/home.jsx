import { useNavigate } from "react-router-dom";
import heroBg from "/images/hero-bg9.jpg";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>DRIVE THE FUTURE</h1>
          <p>
            Experience luxury, innovation and performance in one powerful machine.
          </p>
          <button onClick={handleClick}>Explore Now</button>
        </div>
      </div>
    </section>

    <section className="why-section">
      <h2 className="section-title">Why Choose Our Products</h2>

      {/* Row 1 */}
      <div className="alt-row">
        <div className="alt-content">
          <span className="alt-subtitle">Premium Quality</span>
          <h3 className="alt-heading">Crafted with Precision</h3>

          <p className="alt-description">
            Every product in our collection undergoes rigorous testing to ensure
            exceptional performance, durability, and luxury-grade standards.
          </p>

          <div className="alt-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">
                Certified premium materials and engineering
              </span>
            </div>

            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">
                Precision craftsmanship and strict quality control
              </span>
            </div>

            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">
                Long-term reliability and warranty protection
              </span>
            </div>
          </div>
        </div>

        <div className="alt-image">
          <img src="/images/rowImage4.jpg" />
          </div>
      </div>

      {/* Row 2 */}
      <div className="alt-row reverse">
        <div className="alt-image">
          <img src="/images/rowImage1.jpg" />
        </div>

        <div className="alt-content">
          <span className="alt-subtitle">Innovation First</span>
          <h3 className="alt-heading">Cutting-Edge Technology</h3>

          <p className="alt-description">
            We integrate advanced engineering and modern technology to deliver
            performance-driven products designed for the future.
          </p>

          <div className="alt-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">
                Latest generation performance technology
              </span>
            </div>

            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">
                Smart systems for enhanced experience
              </span>
            </div>

            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">
                Future-ready modern design philosophy
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="alt-row">
        <div className="alt-content">
          <span className="alt-subtitle">Customer Focused</span>
          <h3 className="alt-heading">Exceptional Experience</h3>

          <p className="alt-description">
            From browsing to ownership, we prioritize seamless experience,
            trusted support, and complete customer satisfaction.
          </p>

          <div className="alt-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">
                Dedicated customer assistance
              </span>
            </div>

            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">
                Hassle-free purchase and returns
              </span>
            </div>

            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">
                Fast delivery and premium service
              </span>
            </div>
          </div>
        </div>

        <div className="alt-image">
          <img src="/images/rowimage3.jpg" alt="" />
        </div>
      </div>
    </section>
    </>

  );

}
