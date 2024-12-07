import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
    const { items, removeFromCart, updateQuantity, total } = useCart();
    if (!isOpen) return null;
    return (
        <div className="position-fixed top-0 end-0 h-100 bg-white shadow-lg" style={{ width: '400px', zIndex: 1050 }}>
            <div className="d-flex flex-column h-100">
                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                        <ShoppingCart size={24} />
                        <h5 className="mb-0">Shopping Cart</h5>
                    </div>
                    <button className="btn btn-link text-dark p-0" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-grow-1 overflow-auto p-3">
                    {items.length === 0 ? (
                        <div className="text-center text-muted py-5">
                            Your cart is empty
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item._id} className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex gap-3">
                                        <img
                                            src={item.images.url}
                                            alt={item.name}
                                            className="rounded"
                                            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">{item.name}</h6>
                                            <p className="text-primary mb-2">₹{item.afterDiscountPrice}</p>
                                            <div className="d-flex align-items-center gap-2">
                                                <select
                                                    className="form-select form-select-sm w-auto"
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                                                >
                                                    {[...Array(10)].map((_, i) => (
                                                        <option key={i + 1} value={i + 1}>
                                                            {i + 1}
                                                        </option>
                                                    ))}
                                                </select>
                                                <button
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => removeFromCart(item._id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-3 border-top">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="mb-0">Total</h5>
                        <h5 className="mb-0">₹{total}</h5>
                    </div>
                    <button className="btn btn-primary w-100" disabled={items.length === 0}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
