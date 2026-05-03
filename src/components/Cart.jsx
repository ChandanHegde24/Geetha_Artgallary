import { useCart } from '../context/CartContext';
import { SITE } from '../config/site';
import { Link } from 'react-router-dom';
import '../styles/cart.css';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) {
      return null;
    }

    let message = "Hi Geeta,\n\nI would like to order the following items:\n\n";
    
    cart.forEach((item) => {
      const price = parseFloat(item.price.replace(/[₹,\s]/g, ''));
      const itemTotal = price * item.quantity;
      message += `• ${item.name}\n  Quantity: ${item.quantity}\n  Price per item: ${item.price}\n  Subtotal: ₹${itemTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
      
      // Add image URL if available
      if (item.image) {
        const imageUrl = new URL(item.image, window.location.origin).href;
        message += `  Image: ${imageUrl}\n`;
      }
      
      message += "\n";
    });

    const totalPrice = getTotalPrice();
    message += `Total Amount: ₹${totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n\nPlease confirm availability and delivery details.`;
    
    return message;
  };

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    if (message) {
      const whatsappURL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    }
  };

  if (cart.length === 0) {
    return (
      <section className="cart-section">
        <div className="cart-container">
          <h2>Shopping Cart</h2>
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
          </div>
        </div>
      </section>
    );
  }

  const totalPrice = getTotalPrice();

  return (
    <section className="cart-section">
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <div className="cart-content">
          <div className="cart-items">
            <div className="cart-header">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
              <span>Action</span>
            </div>

            {cart.map((item, index) => {
              const price = parseFloat(item.price.replace(/[₹,\s]/g, ''));
              const subtotal = price * item.quantity;

              return (
                <div key={index} className="cart-item">
                  <div className="item-details">
                    <div className="item-meta">
                      <h4>{item.name}</h4>
                      <span className="item-eta">{item.eta}</span>
                    </div>
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <span className="item-price">{item.price}</span>
                  <div className="quantity-control">
                    <button 
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      className="qty-btn"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      value={item.quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 1;
                        updateQuantity(item.name, val);
                      }}
                      min="1"
                      className="qty-input"
                    />
                    <button 
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      className="qty-btn"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <span className="item-subtotal">₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="remove-btn"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              
              <div className="summary-row">
                <span>Items:</span>
                <span>{cart.length}</span>
              </div>

              <div className="summary-row note">
                <span>Note:</span>
                <span>Shipping charges will be calculated based on location</span>
              </div>

              <div className="summary-row total">
                <span>Total:</span>
                <span>₹{totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>

              <button 
                onClick={handleCheckout}
                className="btn btn-success checkout-btn"
              >
                Proceed to Checkout on WhatsApp
              </button>

              <Link to="/shop" className="btn btn-secondary continue-shopping">
                Continue Shopping
              </Link>

              <button 
                onClick={clearCart}
                className="btn btn-danger clear-cart"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        {/* Order Preview Section with Images */}
        <div className="order-preview-section">
          <h3>Your Order Preview</h3>
          <div className="order-images-grid">
            {cart.map((item, index) => (
              <div key={index} className="order-image-card">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="order-preview-image"
                    loading="lazy"
                  />
                )}
                <div className="order-image-info">
                  <h4>{item.name}</h4>
                  <p className="image-quantity">Qty: {item.quantity}</p>
                  <p className="image-price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
