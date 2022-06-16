import React, { useState } from "react";
import useStyles from "./Styles.js";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { ALPHABET_REGEX } from '../../../Constants/constants.js';
import { NUMBER_REGEX } from '../../../Constants/constants';
import { ToastContainer, toast } from "react-toastify";


const Form = ({currentProductId}) => {
    const classes = useStyles();
    
    var [productInfo, setProductInfo] = useState({
        name: '',
        desc: '',
        price: '',
        color: '',
        metal: '',
        type: '',
        errors: {
            name: '',
            desc: '',
            price: '',
            color: '',
            metal: '',
            type: '',
        },
    })

    const handleProductNameEvents = () => {
        if (productInfo.name === "" || !productInfo.name.match(ALPHABET_REGEX)) {
            setProductInfo({
              ...productInfo,
              errors: {
                ...productInfo.errors,
                name: "Enter a valid product name!",
              },
            });
          } else {
            setProductInfo({
              ...productInfo,
              errors: {
                ...productInfo.errors,
                name: '',
              },
            });
        }
    }

    const handleProductPriceEvents = () => {
        if (productInfo.price === "" || !productInfo.price.match(NUMBER_REGEX)) {
          setProductInfo({
            ...productInfo,
            errors: {
              ...productInfo.errors,
              price: "Enter a valid price!",
            },
          });
        } else {
          setProductInfo({
            ...productInfo,
            errors: {
              ...productInfo.errors,
              price: '',
            },
          });
        }
    };

    const handleClear = () => {
        setProductInfo({
        name: '',
        desc: '',
        price: '',
        color: '',
        metal: '',
        type: '',
        errors: {
            name: '',
            desc: '',
            price: '',
            color: '',
            metal: '',
            type: '',
            },
        })
    }

    const handleProductInformation = (fieldName, value) => {
    setProductInfo({
        ...productInfo,
        [fieldName]: value,
    });
    };


    const addProduct = (e) => {
    e.preventDefault();

    if (
        productInfo.name === "" ||
        productInfo.errors.name !== "" ||
        productInfo.desc === "" ||
        productInfo.errors.desc !== "" ||
        productInfo.price === "" ||
        productInfo.errors.price !== "" ||
        productInfo.color === "" ||
        productInfo.errors.color !== "" ||
        productInfo.metal === "" ||
        productInfo.errors.metal !== "" ||
        productInfo.type === "" ||
        productInfo.errors.type !== ""
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
        toast.success("Added product successfully!", {
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
        <Paper className={classes.paper} elevation={10}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={addProduct}>
                <Typography variant="h6">{currentProductId ? "Edit Product": "Add Product"}</Typography>
                <TextField 
                    name="name" 
                    variant="outlined" 
                    label="Product Name" 
                    fullWidth 
                    error={productInfo.errors.name === "" ? false : true}
                    helperText={productInfo.errors.name}
                    value={productInfo.name}
                    onChange={(e) => {
                        handleProductInformation("name", e.target.value);
                    }}
                    onBlur={handleProductNameEvents}/>
                <TextField 
                    name="description" 
                    variant="outlined" 
                    error={productInfo.errors.desc === "" ? false : true}
                    helperText={productInfo.errors.desc}
                    value={productInfo.desc}
                    label="Product Description" 
                    fullWidth 
                    onChange={(e) => {
                        handleProductInformation("desc", e.target.value);
                      }}
                    />
                <TextField 
                    name="price" 
                    variant="outlined"
                    label="Product Price" 
                    error={productInfo.errors.price === "" ? false : true}
                    helperText={productInfo.errors.price}
                    value={productInfo.price}
                    fullWidth
                    onChange={(e) => {
                        handleProductInformation("price", e.target.value);
                      }}
                      onBlur={handleProductPriceEvents}/>
                <TextField 
                    name="color" 
                    variant="outlined" 
                    label="Product Color" 
                    fullWidth
                    error={productInfo.errors.color === "" ? false : true}
                    helperText={productInfo.errors.color}
                    value={productInfo.color}
                    onChange={(e) => {
                        handleProductInformation("color", e.target.value);
                      }}
                    />
                <TextField 
                    name="metal" 
                    variant="outlined" 
                    label="Metal Type" 
                    fullWidth
                    error={productInfo.errors.metal === "" ? false : true}
                    helperText={productInfo.errors.metal}
                    value={productInfo.metal}
                    onChange={(e) => {
                        handleProductInformation("metal", e.target.value);
                      }}
                    />
                <TextField 
                    name="type" 
                    variant="outlined" 
                    label="Product Type" 
                    fullWidth
                    error={productInfo.errors.type === "" ? false : true}
                    helperText={productInfo.errors.type}
                    value={productInfo.type}
                    onChange={(e) => {
                        handleProductInformation("type", e.target.value);
                      }}
                    />
              
                <div className={classes.fileInput}>
                    <FileBase 
                            type="file"
                            name="image" 
                            multiple={false}
                            onDone={() => {}}/>
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" disabled={false}>Submit</Button>
                <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="large" onClick={() => {handleClear()}} >Clear</Button>
            </form>
            <ToastContainer />
        </Paper>
    );
};

export default Form;