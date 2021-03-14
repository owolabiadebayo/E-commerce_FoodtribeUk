const functions = require("firebase-functions");
const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors")({ origin: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.json());

app.get("/help", (request, response) =>
  response.status(200).send("hello world")
);

exports.api = functions.https.onRequest(app)
// app.post("/payments/create", cors(), async (request, response) => {
//   let { amount, id } = req.body;
//   try {
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "USD",
//       description: "Foodtribe UK",
//       payment_method: id,
//       confirm: true,
//     });
//     console.log("Payment", payment);
//     res.json({
//       message: "Payment successful",
//       success: true,
//     });
//   } catch (error) {
//     console.log("Error", error);
//     res.json({
//       message: "Payment failed",
//       success: false,
//     });
//   }
// });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
