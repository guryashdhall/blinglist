import React, { useState } from "react";
import useStyles from "./Styles.js";
import Jewel from "./Jewel/Jewel.js";
import Form from "../Form/Form.js";
import { Grid } from '@material-ui/core';

const Jewels = () => {
    const classes = useStyles();
    const [currentProductId, setCurrentProductId] = useState(null)

    const jewels = [
        {
            product_id: "a",
            product_name: "Knotted Heart Ring",
            product_image: "",
            product_description: "",
            product_price: 95.00

        },
        {
            product_id: "b",
            product_name: "Clear Tilted Heart Solitaire Ring",
            product_image: "",
            product_description: "",
            product_price: 55.00

        },
        {
            product_id: "c",
            product_name: "Band of Hearts Ring",
            product_image: "",
            product_description: "",
            product_price: 45.00
            
        },
        {
            product_id: "d",
            product_name: "Clear Heart Solitaire Ring",
            product_image: "",
            product_description: "",
            product_price: 60.00
        },
        {
            product_id: "e",
            product_name: "Wheat Grains Wishbone Ring",
            product_image: "",
            product_description: "",
            product_price: 55.00
        }
    ]
    
    return (
        <div>
            <Form currentProductId={currentProductId}/>

            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {jewels.map((jewel) => (
                <Grid key={jewel.product_id} item xs={12} sm={12} md={6} lg={4}>
                    <Jewel jewel={jewel} setCurrentProductId={setCurrentProductId}/>
                </Grid>
            ))
            }
        </Grid>
        </div>   
    );
};

export default Jewels;