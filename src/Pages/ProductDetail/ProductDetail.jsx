import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
// import { useCart } from '../context/CartContext';
import { useCart } from '../../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`http://localhost:7000/api/v1/get-all-product`);
                const foundProduct = data.products.find((p) => p._id === id);
                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    setError('Product not found');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('Failed to load product details');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleQuantityChange = (value) => {
        setQuantity(Math.max(1, Math.min(value, product?.quantity || 1)));
    };

    if (loading) {
        return (
            <div className="min-vh-100 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-vh-100 d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <p className="text-danger fs-5">{error || 'Product not found'}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="position-relative">
                        <img
                            src={product.images.url}
                            alt={product.name}
                            className="img-fluid rounded shadow"
                            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
                        />
                        {product.discountPercent > 0 && (
                            <span className="position-absolute top-0 end-0 mt-3 me-3 badge bg-danger fs-5">
                                -{product.discountPercent}% OFF
                            </span>
                        )}
                    </div>
                </div>

                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold mb-4">{product.name}</h1>
                    <p className="lead mb-4">{product.catchLine.replace(/\*\*/g, '')}</p>

                    <div className="mb-4">
                        <h2 className="h4 mb-3">Pricing</h2>
                        <div className="d-flex align-items-center gap-3">
                            <h3 className="text-primary mb-0">₹{product.afterDiscountPrice}</h3>
                            {product.mainPrice !== product.afterDiscountPrice && (
                                <span className="text-muted text-decoration-line-through fs-4">
                                    ₹{product.mainPrice}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <h2 className="h4 mb-3">Quantity</h2>
                        <div className="d-flex align-items-center gap-3">
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => handleQuantityChange(quantity - 1)}
                            >
                                <Minus size={20} />
                            </button>
                            <input
                                type="number"
                                className="form-control text-center"
                                style={{ width: '80px' }}
                                value={quantity}
                                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                            />
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => handleQuantityChange(quantity + 1)}
                            >
                                <Plus size={20} />
                            </button>
                        </div>
                    </div>

                    <button
                        className="btn btn-primary btn-lg d-flex align-items-center gap-2 mb-4"
                        onClick={() => addToCart(product, quantity)}
                    >
                        <ShoppingCart size={24} />
                        Add to Cart
                    </button>


                </div>
                <div className='col-lg-12'>
                    <div className="mb-4">
                        <h2 className="h4 mb-3">Description</h2>
                        <p className="mb-0">{product.description}</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="h4 mb-3">How to Use</h2>
                        <p className="mb-0">{product.howToUse}</p>
                    </div>

                    <div>
                        <h2 className="h4 mb-3">Dosage</h2>
                        <p className="mb-0">{product.doge}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;