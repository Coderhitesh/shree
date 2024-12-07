import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faSpinner } from '@fortawesome/free-solid-svg-icons';

const OrderHistory = () => {
  // Placeholder data - replace with actual API call
  const orders = [
    {
      id: '1',
      date: '2024-02-10',
      status: 'Delivered',
      total: 1299,
      items: 3
    },
    {
      id: '2',
      date: '2024-02-05',
      status: 'Processing',
      total: 899,
      items: 2
    }
  ];

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-header bg-white border-0 py-3">
        <h4 className="mb-0">Order History</h4>
      </div>
      <div className="card-body">
        {orders.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{new Date(order.date).toLocaleDateString()}</td>
                    <td>{order.items} items</td>
                    <td>₹{order.total}</td>
                    <td>
                      <span className={`badge bg-${order.status === 'Delivered' ? 'success' : 'warning'}`}>
                        {order.status === 'Processing' && <FontAwesomeIcon icon={faSpinner} spin className="me-1" />}
                        {order.status === 'Delivered' && <FontAwesomeIcon icon={faBox} className="me-1" />}
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-5">
            <FontAwesomeIcon icon={faBox} size="3x" className="text-muted mb-3" />
            <h5>No orders yet</h5>
            <p className="text-muted">Your order history will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;