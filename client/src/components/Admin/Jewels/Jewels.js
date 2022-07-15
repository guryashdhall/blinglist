import React, { useState, useEffect } from "react";
import useStyles from "./Styles.js";
import Jewel from "./Jewel/Jewel.js";
import Form from "../Form/Form.js";
import { Grid, CircularProgress } from "@material-ui/core";
import { getProducts } from "../../../store/actions/admin.js";
import { useLocation, useNavigate } from "react-router-dom";
import { getSearchProducts } from "../../../store/actions/recommendation.js";
import { isUserLoggedIn } from "../../../Helpers/helper.js";

const Jewels = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [jewels, setJewels] = useState({});
  const [user, setUser] = useState("admin");
  const [searchQuery, setSearchQuery] = useState("");

  const role = localStorage.getItem("role");

  useEffect(() => {
    isUserLoggedIn() ? navigate("/admin") : navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () => {
      if (searchParams.get("search")) {
        setSearchQuery(searchParams.get("search"));
        getSearchProducts(searchParams.get("search")).then((result) => {
          setJewels(result);
        });
      } else {
        getProducts().then((result) => {
          setJewels(result);
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setJewels],
    [setSearchQuery]
  );

  return (
    <div>
      {role === "admin" && <Form currentProductId={currentProductId} />}

      {jewels["products"] ? (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {jewels["products"].map((jewel) => (
            <Grid key={jewel._id} item xs={12} sm={12} md={6} lg={4}>
              <Jewel jewel={jewel} setCurrentProductId={setCurrentProductId} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Jewels;
