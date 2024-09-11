import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SalesView from './components/SalesView';
import UsersView from './components/UsersView';
import ProductsView from './components/ProductsView';
import '@fontsource/roboto'; // Defaults to weight 400
import '@fontsource/roboto/500.css'; // For weight 500
import '@fontsource/roboto/700.css'; // For weight 700

function App() {
    const [activeTab, setActiveTab] = useState('sales');

    const renderContent = () => {
        switch (activeTab) {
            case 'sales':
                return <SalesView />;
            case 'users':
                return <UsersView />;
            case 'products':
                return <ProductsView />;
            default:
                return <SalesView />;
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar onTabChange={setActiveTab} />
            <div style={{ padding: '20px', flex: 1 }}>
                {renderContent()}
            </div>
        </div>
    );
}

export default App;
