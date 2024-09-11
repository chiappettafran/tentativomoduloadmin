import React from 'react';

function UsersView() {
    const userData = [
        { name: 'Juan Pérez', email: 'juan@example.com', isAdmin: false },
        { name: 'María López', email: 'maria@example.com', isAdmin: true },
        { name: 'Alicia Gómez', email: 'alicia@example.com', isAdmin: false },
        { name: 'Roberto Fernández', email: 'roberto@example.com', isAdmin: false },
        { name: 'Carlos Rodríguez', email: 'carlos@example.com', isAdmin: true },
    ];

    return (
        <div>
            <h2 style={styles.heading}>Usuarios</h2>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Administrador</th>
                </tr>
                </thead>
                <tbody>
                {userData.map((user, index) => (
                    <tr key={index}>
                        <td style={styles.cell}>{user.name}</td>
                        <td style={styles.cell}>{user.email}</td>
                        <td style={styles.cell}>
                            <button style={styles.button}>{user.isAdmin ? 'Quitar Admin' : 'Hacer Admin'}</button>
                        </td>
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
    button: {
        padding: '5px 10px',
        backgroundColor: '#b27070',
        color: '#fff',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default UsersView;