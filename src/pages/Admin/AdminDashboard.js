import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu';
import { useAuth } from '../../context/context/auth';

const AdminDashboard= () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminMenu/>
          </div>
          <div className='col-md-9'>content</div>
          <div className='card w-75 p-3'>
            <h3>Admin Name:{auth?.user?.first_name}</h3>
            <h3>Admin Email:{auth?.user?.email}</h3>
            <h3>Admin Contact:{auth?.user?.phone}</h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard;
