const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HYNnOBOfmmNGtojPl8tO74ObtlE1w0fQzXo2Mi8ucSVgNcscZCZ9SxemXjgmNAr2gvpT2vUOIMJCzhZmvTVNIoR00vGLUJ9EC"
);

// API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Receive BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // Submit a currency
    currency: "usd",
  });

  // OK - Create
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
  console.log("================", clientSecret);
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-1474e/us-central1/api
