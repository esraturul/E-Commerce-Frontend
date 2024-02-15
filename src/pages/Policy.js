import React from 'react';
import Layout from '../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout title = {'Privacy Policy'}>
     <div className='row ContactUs'>
        <div className='col-md-6'>
            <img

            src = "/images/privacy-policy-2.jpg"
            alt="privpolicy"
            style={{width: "100%"}}
            />
        </div>
        <div className="col-md-4">
          <br/>
          <br/>
          <br/>
          <p >As a result of breach of contract, tort, negligence or other reasons; does not accept any responsibility for interruption of the transaction, error, negligence, interruption, deletion, loss, delay of transaction or communication, computer virus, communication error, theft, destruction or unauthorized entry into records, modification or use.</p>
          
        </div>
        
      </div>
    </Layout>
  )
}

export default Policy;
