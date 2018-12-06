
const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const passport = require('passport');
const paypalKey = require('../../../config/key_paypal')

router.get('/paysuccess', (req, res)=>{
    req.render("hello");
})

// router.post('/user/payment/charge', (req, res)=>{
//     const token = req.body.stripeToken;
//     const chargeAmount = req.body.chargeAmount;
//     const charge = stripe.charges.create({
//         amount: chargeAmount,
//         currency: 'gbp',
//         source: token
//     }, (err, charge)=>{
//         if(err & err.type === 'StripeCardError'){
//             console.log("Your card is declinend");
//         }
//     })

//     console.log("payment successful");
//     res.redirect('/paysuccess')

// }); 
router.post('/pay', (req, res) => {
    const create_payment_json = {
      "intent": "sale",
      "payer": {
          "payment_method": "paypal"
      },
      "redirect_urls": {
          "return_url": "http://localhost:5000/success",
          "cancel_url": "http://localhost:5000/cancel"
      },
      "transactions": [{
          "item_list": {
              "items": [{
                  "name": "C2 Model",
                  "sku": "001",
                  "price": "25.00",
                  "currency": "USD",
                  "quantity": 1
              }]
          },
          "amount": {
              "currency": "USD",
              "total": "25.00"
          },
          "description": "Hat for the best team ever"
      }]
  };
  
  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        // for(let i = 0;i < payment.links.length;i++){
        //   if(payment.links[i].rel === 'approval_url'){
        //     res.redirect(payment.links[i].href);
        //   }
        //}
        console.log("create apyment getway")
        console.log(payment);
        
    }
  });
  
  });
  
  router.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "25.00"
          }
      }]
    };
  
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log(JSON.stringify(payment));
          res.send('Success');
      }
  });
  });
  
  router.get('/cancel', (req, res) => res.send('Cancelled'));

  
module.exports = router;