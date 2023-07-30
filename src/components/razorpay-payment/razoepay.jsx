import React from 'react';
import { Razorpay } from 'react-razorpay';


const razoepay = () => {
  
    const options = {
        key: 'YOUR_RAZORPAY_KEY',
        amount: 10000, // Amount in paise (e.g., 10000 represents ₹100)
        name: 'Your App',
        description: 'Payment for Product',
        image: 'https://your-website.com/logo.png',
        handler: function (response) {
          console.log(response);
          // Handle the payment response here
        },
        prefill: {
          name: 'John Doe',
          email: 'john@example.com',
          contact: '9876543210',
        },
        notes: {
          address: '123, Street Name',
        },
        theme: {
          color: '#F37254',
        },
      };
 
      const paymentCallback = function (response) {
        console.log(response);
        // Handle the payment response here
      };
 
      return (
        <Razorpay
          options={options}
          callback={paymentCallback}
          razorpayKey={'YOUR_RAZORPAY_KEY'}
        >
          <button>Pay Now</button>
        </Razorpay>
      );
    
  
}

export default razoepay

