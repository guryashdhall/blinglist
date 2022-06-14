import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
  AMOUNT,
  CARD_CVV_NUMBER,
  CARD_EXPIRATION_DATE,
  CARD_NUMBER,
} from "../../../Constants/constants.js";

const PayForGiftCard = ({
  cardInfo,
  handleCardInformation,
  handleCardNumberBlurEvent,
  handleCardCvvBlurEvent,
  handleExpireDateBlurDate,
  handleGiftCardAmount
}) => {
  return (
    <Paper elevation={20} className="gift-card">
      <Typography variant="h4" className="title" gutterBottom component="div">
        Payment
      </Typography>
      <Grid container align="center">
        <Grid xs={12} mb={2}>
          <TextField
            className="user-input"
            variant="outlined"
            label="Amount"
            color="secondary"
            error={cardInfo.errors.amount === "" ? false : true}
            helperText={cardInfo.errors.amount}
            value={cardInfo.amount}
            onChange={(e) => {handleCardInformation(AMOUNT, e.target.value)}}
            onBlur={handleGiftCardAmount}
          />
        </Grid>
        <Grid xs={12} mb={2}>
          <TextField
            className="user-input"
            variant="outlined"
            label="Card Number"
            color="secondary"
            placeholder="4545 4545 4545 4545"
            error={cardInfo.errors.cardNumber === "" ? false : true}
            helperText={cardInfo.errors.cardNumber}
            value={cardInfo.cardNumber}
            onChange={(e) => {
              handleCardInformation(CARD_NUMBER, e.target.value);
            }}
            onBlur={handleCardNumberBlurEvent}
          />
        </Grid>
        <Grid xs={12} mb={2}>
          <TextField
            className="user-input"
            variant="outlined"
            label="CVV Number"
            color="secondary"
            placeholder="123"
            error={cardInfo.errors.cardCvvNumber === "" ? false : true}
            helperText={cardInfo.errors.cardCvvNumber}
            value={cardInfo.cardCvvNumber}
            onChange={(e) => {
              handleCardInformation(CARD_CVV_NUMBER, e.target.value);
            }}
            onBlur={handleCardCvvBlurEvent}
          />
        </Grid>
        <Grid xs={12} mb={2}>
          <TextField
            className="user-input"
            variant="outlined"
            label="Exp Date"
            color="secondary"
            placeholder="MM/YY"
            error={cardInfo.errors.cardExpirationDate === "" ? false : true}
            helperText={cardInfo.errors.cardExpirationDate}
            value={cardInfo.cardExpirationDate}
            onChange={(e) => {
              handleCardInformation(CARD_EXPIRATION_DATE, e.target.value);
            }}
            onBlur={handleExpireDateBlurDate}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PayForGiftCard;
