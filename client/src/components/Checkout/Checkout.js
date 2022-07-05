import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import PaymentCard from "./Payment/PaymentCard";
import {
  validateCardNumber,
  validateExpireDate,
} from "../../Helpers/helper.js";
import { ALPHABET_REGEX, CARD_CVV_REGEX } from "../../Constants/constants.js";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

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

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardCvvNumber: "",
    cardExpirationDate: "",
    errors: {
      cardNumber: "",
      cardCvvNumber: "",
      cardExpirationDate: "",
    },
  });

  const handleCardDetails = (fieldName, value) => {
    setCardInfo({
      ...cardInfo,
      [fieldName]: value,
    });
  };

  const handleCardNumberBlurEvent = () => {
    if (
      cardInfo.cardNumber === "" ||
      cardInfo.cardNumber.match(ALPHABET_REGEX)
    ) {
      setCardInfo({
        ...cardInfo,
        errors: {
          ...cardInfo.errors,
          cardNumber: "Enter a valid card number!",
        },
      });
    } else {
      if (
        !validateCardNumber(parseInt(cardInfo.cardNumber)) ||
        cardInfo.cardNumber.length !== 16
      ) {
        setCardInfo({
          ...cardInfo,
          errors: {
            ...cardInfo.errors,
            cardNumber: "Enter a valid card number!",
          },
        });
      } else {
        setCardInfo({
          ...cardInfo,
          errors: {
            ...cardInfo.errors,
            cardNumber: "",
          },
        });
      }
    }
  };

  const handleCardCvvBlurEvent = () => {
    if (
      cardInfo.cardCvvNumber === "" ||
      cardInfo.cardCvvNumber.match(CARD_CVV_REGEX)
    ) {
      setCardInfo({
        ...cardInfo,
        errors: {
          ...cardInfo.errors,
          cardCvvNumber: "Enter a valid 3 digit CVV number",
        },
      });
    } else {
      setCardInfo({
        ...cardInfo,
        errors: {
          ...cardInfo.errors,
          cardCvvNumber: "",
        },
      });
    }
  };

  const handleExpireDateBlurDate = () => {
    if (validateExpireDate(cardInfo.cardExpirationDate)) {
      setCardInfo({
        ...cardInfo,
        errors: {
          ...cardInfo.errors,
          cardExpirationDate: "",
        },
      });
    } else {
      setCardInfo({
        ...cardInfo,
        errors: {
          ...cardInfo.errors,
          cardExpirationDate: "Enter valid expiration date!",
        },
      });
    }
  };

  const makePayment = (event) => {
    event.preventDefault();

    if (
      cardInfo.cardCvvNumber === "" ||
      cardInfo.errors.cardCvvNumber !== "" ||
      cardInfo.cardNumber === "" ||
      cardInfo.errors.cardNumber !== "" ||
      cardInfo.cardExpirationDate === "" ||
      cardInfo.errors.cardExpirationDate !== ""
    ) {
      toast.error("Please fill all the fields!", {
        position: "bottom-right",
        theme: "dark",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Payment successfull!", {
        position: "bottom-right",
        theme: "dark",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/reviews");
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
            Your Bag (1 Item)
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
                <di>C$ 55.00</di>
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
                <di>TBD</di>
              </div>
              <div className="total">
                <div>
                  <span>Total</span>
                </div>
                <div>C$ 64.95</div>
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
                />
                <Button variant="contained" className="promo-code-btn">
                  APPLY
                </Button>
              </div>
              <PaymentCard
                cardInfo={cardInfo}
                handleCardDetails={handleCardDetails}
                handleCardNumberBlurEvent={handleCardNumberBlurEvent}
                handleCardCvvBlurEvent={handleCardCvvBlurEvent}
                handleExpireDateBlurDate={handleExpireDateBlurDate}
              />
              <Button onClick={makePayment} className="checkout-btn">
                CHECKOUT
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
