import React from 'react';
import Layout from '../components/Layout/Layout';
import {BiSupport,BiMailSend,BiPhoneCall} from 'react-icons/bi'

const Contact = () => {
  return (
    <Layout title={'Contact us'}>
      <div className='row ContactUs'>
        <div className='col-md-6'>
            <img

            src = "/images/image.jpg"
            alt="contactus"
            style={{width: "100%"}}
            />
        </div>
        <div className='col-md-4'>
            <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
            <p className='text-justify mt-2'>
            You can contact us in case of any problems.
            </p>
            <p className='mt-3'>
                <BiMailSend/> : www.help@ekinoksshop.com
            </p>
            <p className='mt-3'>
                <BiPhoneCall/> : 0312 456 987
            </p>
            <p className='mt-3'>
                <BiSupport/> : 1200 0000 0000
            </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact;
