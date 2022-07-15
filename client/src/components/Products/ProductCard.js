import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ data }) {
  const navigate = useNavigate();
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
            <IconButton aria-label="favourite">
              <FavoriteBorderIcon />
            </IconButton>
          }
          title={data.title}
          subheader={data.datePosted}
        />
        <CardMedia
          sx={{ boxShadow: 3 }}
          title={data.title}
          image={`${data.imageURL}`}
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
                <b>Price:</b> CAD {data.cost}
              </td>
              <td style={{ textAlign: "right" }}>
                {data.available ? (
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
          <Typography textAlign="justify">{data.description}</Typography>
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
    </div>
  );
}
