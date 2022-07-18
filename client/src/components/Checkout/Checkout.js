import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

import { checkoutPayment, checkPromoCode } from "../../store/actions/payment";

import "react-toastify/dist/ReactToastify.css";
import "./Checkout.css";
import { stripePaymentPublishKey } from "../../config/config";
import { isUserLoggedIn } from "../../Helpers/helper";

const Checkout = () => {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");
  const [disablePromoCodeButton, setDisablePromoCodeButton] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let role = localStorage.getItem("role");
    if (isUserLoggedIn()) {
      if (role === "customer") {
        setSubTotalAmount(15);
        calculateTotalAmount(15);
      } else {
        navigate("/admin");
      }
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const itemDetails = [
    {
      image:
        "https://cdn-fsly.yottaa.net/609426734f1bbfff95ac5607/ca.pandora.net/v~4b.5/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw83b3044f/productimages/main/791678C01_RGB.JPG?sw=150&sh=150&sm=fit&sfrm=png&bgcolor=F5F5F5&yocs=1_",
      item_title: "Tropical Starfish & Shell Clip Charm",
      item_product_number: "Product number: 791678C01",
      item_material: "Metal: Sterling Silver",
      item_stones: "Type: Pendant",
      item_color: "Color: Blue",
      item_amount: "C$ 55.00",
    },
    {
      image:
        "https://cdn-fsly.yottaa.net/609426734f1bbfff95ac5607/ca.pandora.net/v~4b.5/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw83b3044f/productimages/main/791678C01_RGB.JPG?sw=150&sh=150&sm=fit&sfrm=png&bgcolor=F5F5F5&yocs=1_",
      item_title: "Tropical Starfish & Shell Clip Charm",
      item_product_number: "Product number: 791678C01",
      item_material: "Metal: Sterling Silver",
      item_stones: "Stone: Pendant",
      item_color: "Color: Blue",
      item_amount: "C$ 55.00",
    },
  ];

  const makePayment = (token) => {
    const id = JSON.parse(localStorage.getItem("user"))._id;
    const body = {
      token: token,
      totalPayableAmount: 1000,
      orders: [id, id, id],
      user: {
        id: id,
        name: "Dhairya",
        email: "doctordhairya@gmail.com",
      },
    };

    checkoutPayment(body).then((result) => {
      if (result.success === true) {
        toast.success("Payment successfull!", {
          position: "bottom-right",
          theme: "dark",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: () => {
            navigate("/reviews");
          },
        });
      } else {
        toast.error("Please fill all the fields!", {
          position: "bottom-right",
          theme: "dark",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  const calculateTotalAmount = (amount) => {
    setTotalAmount(amount + 9.95 + amount * 0.15);
  };

  const setSubTotalAmount = (amount) => {
    setSubTotal(amount);
  };

  const setDiscountedAmount = (discountPrecent) => {
    setDiscount(discountPrecent);
  };

  const applyDiscount = (discountPercent) => {
    setTotalAmount(totalAmount - totalAmount * (discountPercent / 100));
  };

  const disableButton = () => {
    setDisablePromoCodeButton(true);
  };

  const checkUserPromoCode = () => {
    if (promoCode === "") {
      toast.error("No promocode applied", {
        position: "bottom-right",
        theme: "dark",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      checkPromoCode(promoCode).then((response) => {
        console.log(response.data[0].discount);
        if (response.success) {
          disableButton();
          setDiscountedAmount(response.data[0].discount);
          toast.success("Promocode applied!", {
            position: "bottom-right",
            theme: "dark",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => applyDiscount(response.data[0].discount),
          });
        } else {
          toast.info("No such promo code exists!", {
            position: "bottom-right",
            theme: "dark", 
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
    }
  };

  return (
    <div>
      <div>
        <Grid mt={4} mb={4} align="center" className="page-title">
          <Typography
            mb={1}
            variant="body1"
            color="initial"
            className="heading-2"
          >
            Your Bag ({itemDetails.length} Item)
          </Typography>
          <Typography variant="p" color="initial" className="heading-3">
            Items are not reserved until payment is made.
          </Typography>
        </Grid>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={8} className="items-checklist">
            <Paper elevation={10} className="item-checklist-card">
              <Grid container>
                {itemDetails.map((item) => {
                  return (
                    <Grid
                      onClick={() => {
                        navigate("/viewdetails");
                      }}
                      xs={12}
                      container
                      mb={3}
                    >
                      <Grid xs={4}>
                        <img
                          alt=""
                          src={item.image}
                          height="100%"
                          width="90%"
                        />
                      </Grid>
                      <Grid xs={6}>
                        <Typography
                          className="item-info-title"
                          variant="subtitle2"
                          gutterBottom
                          component="div"
                        >
                          {item.item_title}
                        </Typography>
                        <div>
                          <Typography className="item-info-text">
                            {item.item_product_number}
                          </Typography>
                          <Typography className="item-info-text">
                            {item.item_material}
                          </Typography>
                          <Typography className="item-info-text">
                            {item.item_stones}
                          </Typography>
                          <Typography className="item-info-text">
                            {item.item_color}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid xs={2}>{item.item_amount}</Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4} className="order-summary">
            <Paper elevation={10} className="order-summary-card">
              <Typography className="order-summary-title">
                Order Summary
              </Typography>
              <div className="pricing-information">
                <div>
                  <span className="pricing-type">Subtotal</span>
                </div>
                <div>C$ {subTotal}</div>
              </div>
              <div className="pricing-information">
                <div>
                  <span className="pricing-type">Shipping</span>
                </div>
                <div>C$ 9.95</div>
              </div>
              <div className="pricing-information">
                <div>
                  <span className="pricing-type">Estimated Tax</span>
                </div>
                <div>15%</div>
              </div>
              {discount > 0 && (
                <div className="pricing-information">
                  <div>
                    <span className="pricing-type">Discount Applied</span>
                  </div>
                  <div>{discount}%</div>
                </div>
              )}
              <div className="total">
                <div>
                  <span>Total</span>
                </div>
                <div>C$ {totalAmount}</div>
              </div>
              <div className="coupon-class">
                <Typography variant="h6" gutterBottom component="div">
                  Have a coupon Code?
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Apply Coupon Code"
                  variant="outlined"
                  placeholder="123 456"
                  className="coupon-input"
                  value={promoCode}
                  disabled={disablePromoCodeButton}
                  onChange={(event) => setPromoCode(event.target.value)}
                />
                <Button
                  variant="contained"
                  onClick={checkUserPromoCode}
                  disabled={disablePromoCodeButton}
                  className="promo-code-btn"
                >
                  APPLY
                </Button>
              </div>
              <StripeCheckout
                stripeKey={stripePaymentPublishKey}
                token={(token) => makePayment(token)}
                amount={100000}
                name="Buy Item"
              >
                <Button onClick={makePayment} className="checkout-btn">
                  CHECKOUT
                </Button>
              </StripeCheckout>
            </Paper>
          </Grid>
          <ToastContainer />
        </Grid>
      </div>
    </div>
  );
};

export default Checkout;
