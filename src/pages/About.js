import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About us Ekinoks"}>
       <div className='row ContactUs'>
        <div className='col-md-6'>
            <img

            src = "/images/about-us-page.jpg"
            alt="aboutus"
            style={{width: "100%"}}
            />
        </div>
        <div className="col-md-4">
          <br/>
          <br/>
          <p className="text-justify mt-2">
          Trained beauticians are always waiting for you in the stores to satisfy their consumers and keep up with beauty trends by providing an extraordinary service with their energy and enthusiasm.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About;
