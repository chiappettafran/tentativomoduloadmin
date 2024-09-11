import React from 'react';

function ProductsView() {
    // Example product data
    const productData = [
        { name: 'Product A', price: '$20' },
        { name: 'Product B', price: '$35' },
        { name: 'Product C', price: '$15' },
        { name: 'Product D', price: '$50' },
        { name: 'Product E', price: '$25' },
    ];

    return (
        <div>
            <h2>Products</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {productData.map((product, index) => (
                    <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductsView;