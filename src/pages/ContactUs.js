import * as React from 'react';
import "antd/dist/antd.css"; 
import { Card } from 'antd'; 

const ContactUs = () => {
   
       
      
    return ( 
      <>
      <div className="jumbotron text-danger h3 font-weight-bold text-center">
      Contact Us 
            </div>

            <div style={{ 
      display: 'block', 
      // width: 700,
       padding: 30 
    }}> 
      <h4>Store Locator</h4> 
      <> 
        <Card title="Noida" 
        // bordered 
          style={{ 
            
            padding: 30
          }}> 
          <p>Reves, Designer Studio & Boutique</p> 
  
          <p>Shop No.-5, Yadav Market, Parthala, </p> 
  
          <p>Sector-122, Noida</p> 

          <p>Whatsapp & Contact No.- +91-9120818119</p> 
  
        </Card> 
      </> 
    </div> 

        </>
    )
}


export default ContactUs;














        {/* <div style={{ 
      display: 'block', width: 700, padding: 30 
    }}> 
      <h4>Stores</h4> 
      <Descriptions title="Noida"> 
        <Descriptions.Item label="Address
        ">Reves, Designer Studiio and Boutique
         Yadav Market, 
         sector-122, Noida  </Descriptions.Item> 

        <Descriptions.Item style={{ 
      display: 'block', width: 700, padding: 30 }}label="PhoneNumber">+91-9120818119</Descriptions.Item> 
        <Descriptions.Item style={{ 
      display: 'block', width: 700, padding: 30 }}label="Whatsapp">+91-9120818119</Descriptions.Item> 
       
      </Descriptions> 
    </div>
  
        <br />
        <br /> */
        }