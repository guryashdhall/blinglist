import React, { useState, useEffect } from "react";
import useStyles from "./Styles.js";
import Jewel from "./Jewel/Jewel.js";
import Form from "../Form/Form.js";
import { Grid, CircularProgress } from '@material-ui/core';
import { getProducts } from "../../../store/actions/admin.js";

const Jewels = () => {
    const classes = useStyles();
    const [currentProductId, setCurrentProductId] = useState(null)
    const [jewels, setJewels] = useState({})

    useEffect(() => {
        getProducts().then((result) => {
            setJewels(result)
        })
    }, [jewels]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Form currentProductId={currentProductId} />

            {
                jewels["products"] ? (
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {jewels["products"].map((jewel) => (
                            <Grid key={jewel._id} item xs={12} sm={12} md={6} lg={4}>
                                <Jewel jewel={jewel} setCurrentProductId={setCurrentProductId} />
                            </Grid>
                        ))
                        }
                    </Grid>

                ) : <CircularProgress />
            }

        </div>
    );
};

export default Jewels;