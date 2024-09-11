import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import SalesView from '../components/SalesView';
import UsersView from '../components/UsersView';
import ProductsView from '../components/ProductsView';

const Dashboard = () => {
    const [activePage, setActivePage] = useState('sales');

    return (
        <div className="dashboard">
            <Sidebar setActivePage={setActivePage} />
            {activePage === 'sales' && <SalesView />}
            {activePage === 'users' && <UsersView />}
            {activePage === 'products' && <ProductsView />}
        </div>
    );
};

export default Dashboard;