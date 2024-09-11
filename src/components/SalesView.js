import React from 'react';

function SalesView() {
    const salesData = [
        { date: '2024-09-10', amount: '$500', product: 'Producto A' },
        { date: '2024-09-09', amount: '$750', product: 'Producto B' },
        { date: '2024-09-08', amount: '$200', product: 'Producto C' },
        { date: '2024-09-07', amount: '$650', product: 'Producto D' },
        { date: '2024-09-06', amount: '$1000', product: 'Producto E' },
        { date: '2024-09-05', amount: '$150', product: 'Producto F' },
        { date: '2024-09-04', amount: '$300', product: 'Producto G' },
        { date: '2024-09-03', amount: '$450', product: 'Producto H' },
        { date: '2024-09-02', amount: '$250', product: 'Producto I' },
        { date: '2024-09-01', amount: '$900', product: 'Producto J' },
    ];

    return (
        <div>
            <h2 style={styles.heading}>Resumen de Ventas</h2>
            <div style={styles.cardsContainer}>
                <div style={styles.card}>Ventas Mensuales: $5,000</div>
                <div style={styles.card}>Ventas Anuales: $60,000</div>
            </div>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Monto</th>
                    <th>Producto</th>
                </tr>
                </thead>
                <tbody>
                {salesData.map((sale, index) => (
                    <tr key={index}>
                        <td style={styles.cell}>{sale.date}</td>
                        <td style={styles.cell}>{sale.amount}</td>
                        <td style={styles.cell}>{sale.product}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    heading: {
        fontFamily: 'Roboto, sans-serif',
        color: '#4d4d4d',
        marginBottom: '20px',
    },
    cardsContainer: {
        display: 'flex',
        gap: '20px',
        marginBottom: '20px',
    },
    card: {
        backgroundColor: '#b27070',
        padding: '20px',
        borderRadius: '5px',
        color: '#fff',
        flex: 1,
        textAlign: 'center',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'Roboto, sans-serif',
    },
    cell: {
        textAlign: 'center',
        padding: '10px',
        border: '1px solid #ddd',
    },
};

export default SalesView;