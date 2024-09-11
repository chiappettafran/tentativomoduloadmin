import React from 'react';

function Sidebar({ onTabChange }) {
    return (
        <div style={styles.sidebar}>
            <button style={styles.button} onClick={() => onTabChange('sales')}>Sales</button>
            <button style={styles.button} onClick={() => onTabChange('users')}>Users</button>
            <button style={styles.button} onClick={() => onTabChange('products')}>Products</button>
        </div>
    );
}

const styles = {
    sidebar: {
        width: '200px',
        backgroundColor: '#e3b8b8',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
    },
    button: {
        margin: '10px 0',
        padding: '10px',
        backgroundColor: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Sidebar;