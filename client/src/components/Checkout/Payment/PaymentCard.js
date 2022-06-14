import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import "./PaymentCard.css";
import {
  CARD_CVV_NUMBER,
  CARD_EXPIRATION_DATE,
  CARD_NUMBER,
} from "../../../Constants/constants.js";

const PaymentCard = ({
  cardInfo,
  handleCardDetails,
  handleCardNumberBlurEvent,
  handleCardCvvBlurEvent,
  handleExpireDateBlurDate,
}) => {
  return (
    <div className="payment-card">
      <Typography variant="h5" component="div" className="card-title">
        CARD DETAILS
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            label="14 Digits Card Number"
            placeholder="4545 4545 4545 4545"
            color="secondary"
            error={cardInfo.errors.cardNumber === "" ? false : true}
            helperText={cardInfo.errors.cardNumber}
            value={cardInfo.cardNumber}
            onChange={(e) => {
              handleCardDetails(CARD_NUMBER, e.target.value);
            }}
            onBlur={handleCardNumberBlurEvent}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            label="3 Digit CVV Number"
            placeholder="123"
            color="secondary"
            error={cardInfo.errors.cardCvvNumber === "" ? false : true}
            helperText={cardInfo.errors.cardCvvNumber}
            value={cardInfo.cardCvvNumber}
            onChange={(e) => {
              handleCardDetails(CARD_CVV_NUMBER, e.target.value);
            }}
            onBlur={handleCardCvvBlurEvent}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            label="Date of Expire"
            placeholder="MM/YY"
            color="secondary"
            error={cardInfo.errors.cardExpirationDate === "" ? false : true}
            helperText={cardInfo.errors.cardExpirationDate}
            value={cardInfo.cardExpirationDate}
            onChange={(e) => {
              handleCardDetails(CARD_EXPIRATION_DATE, e.target.value);
            }}
            onBlur={handleExpireDateBlurDate}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PaymentCard;
