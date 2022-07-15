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
import { removeFavourites } from "./Favourites";

// base64ToArrayBuffer = base64 => {
//   var binaryString = window.atob(base64);
//   var binaryLen = binaryString.length;
//   var bytes = new Uint8Array(binaryLen);
//   for (var i = 0; i < binaryLen; i++) {
//     var ascii = binaryString.charCodeAt(i);
//     bytes[i] = ascii;
//   }
//   return bytes;
// };

// getImages = data =>{
//   var sampleArr = this.base64ToArrayBuffer(data);
//   var imagePath=""
//   return imagePath
// }
export default function FavouriteCard({ data }) {
  const navigate = useNavigate();
  
  const removeFavourites = async (e)=>{
    e.preventDefault();
    console.log("Removing favorites");
    const result = await axios.put("http://localhost:8080/favourites/removefavourites", {
      body: JSON.stringify({user_id: data.user_data._id, product_id: data.product_details._id })
    })
    console.log(result.data)
    if (result.data.success) {
      console.log(result.data)
      toast.success("Product has been removed successfully!", {
        position: "top-right",
        theme: "dark",
        autoClose: 2000,
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
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    
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
            <IconButton aria-label="remove" onClick={event => removeFavourites(event)}>
              <CloseIcon />
            </IconButton>
          }
          title={data.product_details.productName.length<25?data.product_details.productName:data.product_details.productName.substring(0, 25)+ "..."}
          subheader={new Date(data.product_details.createdAt).toISOString().
            replace(/T/, ' ').      // replace T with a space
            replace(/\..+/, '') }
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

        <CardContent>
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
          <Typography textAlign="justify">{data.product_details.productDescription.length>330?
          data.product_details.productDescription.substring(0, 330)+"...":data.product_details.productDescription}</Typography>
        </CardContent>
        <div> 
          <table align="center">
            <tr>
              <td>
                <Button variant="outlined" onClick={() => navigate("/viewdetails")}>
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
