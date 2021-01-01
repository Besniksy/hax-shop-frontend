import React from 'react';
import { HeaderOne } from '../../components/Header';
import AdminLayout from '../../components/Layout/AdminLayout';

const Orders = () => {
    return (
        <div>
        <HeaderOne />
        <AdminLayout sidebar> 
          orders
        </AdminLayout>
        </div>
    );
};

export default Orders;