const stripe = require("stripe")(
  "sk_test_51LIC1bE41Y5D29LDh8L9rJtAivoKhMhAxj7dp1oQlIlmiZ73wAg8mKWlFeO0tJkMVzsCknQIRMXyge0HzgEyIFtc00SYXO38ly"
);

const { Orders } = require("../models/Orders");

exports.makePayment = async (req, res) => {
  try {
    const { token, user, orders, totalPayableAmount } = req.body;

    return await stripe.customers
      .create({
        email: user.email,
        source: token.id,
      })
      .then((customer) => {
        stripe.charges.create({
          amount: totalPayableAmount * 100,
          currency: "cad",
          customer: customer.id,
          receipt_email: user.email,
          description: `Payment is successful and $${totalPayableAmount} is paid by ${user.name} for order.`,
        });
      })
      .then(async () => {
        const order = new Orders({
          userID: user.id,
          totalPrice: totalPayableAmount,
          quantity: orders.length,
          itemsList: orders,
        });

        await order
          .save()
          .then((result) => {
            return res.status(200).json({
              success: true,
              message: "Payment done! Orders are added to the order table!",
            });
          })
          .catch((err) => {
            return res
              .status(501)
              .json({ success: false, error: `Somethingg went wrong! ${err}` });
          });
      })
      .catch((err) => {
        return res
          .status(502)
          .json({ success: false, error: `Something went wrong!!! ${err}` });
      });
  } catch (err) {
    return res
      .status(502)
      .json({ success: false, error: `Something went wrong!! ${err}` });
  }
};
