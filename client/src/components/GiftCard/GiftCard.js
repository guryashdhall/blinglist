import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import AddUserInformation from "./AddUserInformation/AddUserInformation";
import SelectGiftCard from "./SelectGiftCard/SelectGiftCard";
import PayForGiftCard from "./PayForGiftCard/PayForGiftCard";

import "./GiftCard.css";
import {
  EMAIL_REGEX,
  ALPHABET_REGEX,
  NUMBER_REGEX,
  CARD_CVV_REGEX,
} from "../../Constants/constants.js";
import {
  validateCardNumber,
  validateExpireDate,
} from "../../Helpers/helper.js";

const GiftCard = () => {
  const imageList = [
    "https://cdn.pixabay.com/photo/2015/08/11/08/21/coupon-883642__340.png",
    "https://cdn.pixabay.com/photo/2015/08/11/08/21/coupon-883638__340.png",
    "https://cdn.pixabay.com/photo/2014/10/04/05/02/coupon-472481__340.jpg",
    "https://cdn.pixabay.com/photo/2015/08/11/08/21/coupon-883636__340.png",
  ];

  const [giftCard, setGiftCard] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    appartmentNumber: "",
    streetNumber: "",
    streetName: "",
    postalCode: "",
    errors: {
      name: "",
      email: "",
      appartmentNumber: "",
      streetNumber: "",
      streetName: "",
      pinCode: "",
      postalCode: "",
    },
  });

  const [cardInfo, setCardInfo] = useState({
    amount: "",
    cardNumber: "",
    cardCvvNumber: "",
    cardExpirationDate: "",
    errors: {
      amount: "",
      cardNumber: "",
      cardCvvNumber: "",
      cardExpirationDate: "",
    },
  });

  const selectGiftCard = (imageIndex) => {
    setGiftCard(imageList[imageIndex]);
  };

  const resetGiftCard = () => {
    setGiftCard("");
  };

  const handleUserInformation = (fieldName, value) => {
    setUserInfo({
      ...userInfo,
      [fieldName]: value,
    });
  };

  const handleNameBlurEvents = () => {
    if (userInfo.name === "") {
      setUserInfo({
        ...userInfo,
        errors: {
          ...userInfo.errors,
          name: "Please enter a valid name!",
        },
      });
    } else if (!userInfo.name.match(ALPHABET_REGEX)) {
      setUserInfo({
        ...userInfo,
        errors: {
          ...userInfo.errors,
          name: "Name should only contain characters!",
        },
      });
    } else {
      setUserInfo({
        ...userInfo,
        errors: {
          ...userInfo.errors,
          name: "",
        },
      });
    }
  };

  const handleEmailBlurEvents = () => {
    if (userInfo.email === "" || !userInfo.email.match(EMAIL_REGEX)) {
      setUserInfo({
        ...userInfo,
        errors: {
          ...userInfo.errors,
          email: "Please enter a valid email!",
        },
      });
    } else {
      setUserInfo({
        ...userInfo,
        errors: {
          ...userInfo.errors,
          email: "",
        },
      });
    }
  };

  const handleAptNumberBlurEvents = () => {
    if (userInfo.appartmentNumber === "") {
      setUserInfo({
        ...userInfo,
        errors: {
          ...userInfo.errors,
          appartmentNumber: "Enter a valid appartment number!",
        },
      });
    } else {
      setUserInfo({
        ...userInfo,
        errors: {
          ...userInfo.errors,
          appartmentNumber: "",
        },
      });
    }
  };

  const handleStreetNumberBlurEvents = () => {
    if (
      userInfo.streetNumber === "" ||
      !userInfo.streetNumber.match(NUMBER_REGEX)
    ) {
      setUserInfo({
        ...userInfo,
        errors: {
          ...userInfo.errors,
          streetNumber: "Enter valid street number!",
        },
      });
    } else {
      setUserInfo({
        ...userInfo,
        errors: {
          ...userInfo.errors,
          streetNumber: "",
        },
      });
    }
  };

  const handleStreetNameBlurEvents = () => {
    if (
      userInfo.streetName === "" ||
      !userInfo.streetName.match(ALPHABET_REGEX)
    ) {
      setUserInfo({
        ...userInfo,
        errors: {
          ...userInfo.errors,
          streetName: "Enter valid street name!",
        },
      });
    } else {
      setUserInfo({
        ...userInfo,
        errors: {
          ...userInfo.errors,
          streetName: "",
        },
      });
    }
  };

  const handlePostalCodeBlurEvents = () => {
    if (userInfo.postalCode === "") {
      setUserInfo({
        ...userInfo,
        errors: {
          ...userInfo.errors,
          postalCode: "Enter a valid postal code!",
        },
      });
    } else {
      setUserInfo({
        ...userInfo,
        errors: {
          ...userInfo.errors,
          postalCode: "",
        },
      });
    }
  };

  const handleCardInformation = (fieldName, value) => {
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

  const handleGiftCardAmount = () => {
    if (
      cardInfo.amount === "" ||
      cardInfo.amount.match(ALPHABET_REGEX) ||
      parseInt(cardInfo.amount) <= 0
    ) {
      setCardInfo({
        ...cardInfo,
        errors: {
          ...cardInfo.errors,
          amount: "Enter a valid amount!",
        },
      });
    } else {
      setCardInfo({
        ...cardInfo,
        errors: {
          ...cardInfo.errors,
          amount: "",
        },
      });
    }
  };

  const makePayment = (event) => {
    event.preventDefault();

    if (
      userInfo.name === "" ||
      userInfo.errors.name !== "" ||
      userInfo.email === "" ||
      userInfo.errors.email !== "" ||
      userInfo.appartmentNumber === "" ||
      userInfo.errors.appartmentNumber !== "" ||
      userInfo.streetName === "" ||
      userInfo.errors.streetName !== "" ||
      userInfo.streetNumber === "" ||
      userInfo.errors.streetNumber !== "" ||
      userInfo.postalCode === "" ||
      userInfo.errors.postalCode !== "" ||
      cardInfo.amount === "" ||
      cardInfo.errors.amount !== "" ||
      cardInfo.cardCvvNumber === "" ||
      cardInfo.errors.cardCvvNumber !== "" ||
      cardInfo.cardNumber === "" ||
      cardInfo.errors.cardNumber !== "" ||
      cardInfo.cardExpirationDate === "" ||
      cardInfo.errors.cardExpirationDate !== "" ||
      giftCard === ""
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
    }
  };

  return (
    <div>
      <Grid align="center" container mt={6}>
        <Grid xs={12} mb={6}>
          <SelectGiftCard
            imageList={imageList}
            selectGiftCard={selectGiftCard}
            resetGiftCard={resetGiftCard}
            giftCard={giftCard}
          />
        </Grid>
        <Grid xs={12} mb={6}>
          <AddUserInformation
            userInfo={userInfo}
            handleUserInformation={handleUserInformation}
            handleNameBlurEvents={handleNameBlurEvents}
            handleEmailBlurEvents={handleEmailBlurEvents}
            handleAptNumberBlurEvents={handleAptNumberBlurEvents}
            handleStreetNumberBlurEvents={handleStreetNumberBlurEvents}
            handleStreetNameBlurEvents={handleStreetNameBlurEvents}
            handlePinCodeBlurEvents={handlePostalCodeBlurEvents}
          />
        </Grid>
        <Grid xs={12} mb={6}>
          <PayForGiftCard
            cardInfo={cardInfo}
            handleCardInformation={handleCardInformation}
            handleCardNumberBlurEvent={handleCardNumberBlurEvent}
            handleCardCvvBlurEvent={handleCardCvvBlurEvent}
            handleExpireDateBlurDate={handleExpireDateBlurDate}
            handleGiftCardAmount={handleGiftCardAmount}
          />
        </Grid>
        <Grid xs={12} mb={6}>
          <Button
            onClick={makePayment}
            color="secondary"
            variant="contained"
            size="large"
          >
            Confirm Payment
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default GiftCard;
