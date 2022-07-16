import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { BACKEND_URL } from "../../config/config";
import moment from "moment";

export default function FavouriteCard({ data }) {
  const navigate = useNavigate();

  const removeFavourites = async (e) => {
    e.preventDefault();
    console.log("Removing favorites");
    console.log("UID:  "+JSON.parse(localStorage.getItem("user"))._id+" PID: "+data.product_details._id)
    const result = await axios.put(BACKEND_URL + "favourites/removefavourites", 
    { user_id: JSON.parse(localStorage.getItem("user"))._id, product_id: data.product_details._id })
    console.log(result.data)
    if (result.data.success) {
      console.log(result.data.data)
      toast.success("Product has been removed successfully!", {
        position: "top-right",
        theme: "dark",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => {
          window.location.reload(false);
        },
      });
    } else {
      console.log(result);
      toast.error("Something went wrong! Please refresh your page and try again.", {
        position: "top-right",
        theme: "dark",
        autoClose: 700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const viewProductDetails = (e)=>{
    e.preventDefault();
    console.log("View Product Details")
    localStorage.setItem('productDetailsId', data._id)
    navigate('/viewdetails')
  }

  return (
    <div>
      <Card
        key={data.id}
        elevation={1}
        sx={{ maxWidth: 345, boxShadow: 5 }}
        xs={{ flex: 1 }}
      >
        <CardHeader
          action={
            <IconButton id={data.product_details._id} aria-label="remove" onClick={event => removeFavourites(event)}>
              <CloseIcon />
            </IconButton>
          }
          title={data.product_details.productName.length < 23 ? data.product_details.productName : data.product_details.productName.substring(0, 20) + "..."}
          subheader={moment(new Date(data.product_details.createdAt).toISOString().
            replace(/T/, ' ').      // replace T with a space
            replace(/\..+/, '')).format('MMMM DD, YYYY')}
        />
        <CardMedia
          sx={{ boxShadow: 3 }}
          title={data.product_details.productName}
          image={`${data.product_details.productImage}`}
          style={{
            height: 0,
            paddingTop: "56.25%", // 16:9,
            marginTop: "50",
          }}
        />

        <CardContent style={{ height: "7vw"}}>
          <table width="100%" maxWidth="100%">
            <tr>
              <td style={{ textAlign: "left" }}>
                <b>Price:</b> CAD {data.product_details.productPrice}
              </td>
              <td style={{ textAlign: "right" }}>
                {data.product_details.inventoryQuantity > 0 ? (
                  <Typography
                    backgroundColor="green"
                    textAlign="center"
                    color="white"
                    width="100%"
                    borderRadius="15%"
                  >
                    Available
                  </Typography>
                ) : (
                  <Typography
                    backgroundColor="red"
                    textAlign="center"
                    color="white"
                    width="100%"
                    borderRadius="15%"
                  >
                    Not Available
                  </Typography>
                )}
              </td>
            </tr>
            <tr style={{ textAlign: "left" }}>
              <b>Description:</b>
            </tr>
          </table>
          <Typography textAlign="justify">
          {
              data.product_details.productDescription.length > 99 ?
                data.product_details.productDescription.substring(0, 96) + "..."
                : data.product_details.productDescription.length == 0 ?
                  "No description available"
                  :
                  data.product_details.productDescription
            }
          </Typography>
        </CardContent>
        <div>
          <table align="center">
            <tr>
              <td>
                <Button variant="outlined" onClick={event=>viewProductDetails(event)}>
                  {" "}
                  {<InfoOutlinedIcon />}&nbsp;View Details
                </Button>
              </td>
              <td>
                <Button variant="outlined" onClick={() => navigate("/cart")}>
                  Add to Cart&nbsp; {<AddShoppingCartOutlinedIcon />}
                </Button>
              </td>
            </tr>
          </table>
          <br />
        </div>
      </Card>
      <ToastContainer />
    </div>
  );
}
