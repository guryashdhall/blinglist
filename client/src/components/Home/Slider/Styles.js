import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    row_wrapper: {
      width: "100%",
      minWidth: 960,
      margin: "5px 3px",
      padding: 5,
      backgroundColor: "#ffffff",
    },
    row_container: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      padding: "10px 1%",
    },
    row_title: {
      fontSize: 30,
      fontWeight: 500,
    },
    row_header_subtitle: {
      fontSize: 14,
      opacity: 0.7,
      fontWeight: 400,
    },
    products_wrapper: {
      flex: "85%",
      width: "85%",
      margin: "5px 10px",
      padding: 5,
      backgroundColor: "#ffffff",
    },
    leftContainer: {
      textAlign: "center",
    },
    product_title: {
      fontSize: 14,
      fontWeight: 600,
      marginTop: 10,
      color: "#212F3D",
    },
    product_discount: {
      fontSize: 14,
      color: "#222",
      paddingTop: 5,
    },
    product_tagline: {
      fontSize: 14,
      opacity: 0.7,
      paddingTop: 5,
      color: "#212F3D",
    },
  }));