import React, { useState } from "react";
import useStyles from "./Styles.js";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import ring1 from '../../../../images/ring1.jpg';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog } from '@mui/material';
import { DialogActions } from '@mui/material';
import { DialogContent } from '@mui/material';
import { DialogContentText } from '@mui/material';
import { DialogTitle } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";

const Jewel = ({jewel, setCurrentProductId}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleDelete = () => {
        setOpen(false);
        toast.success("Product deleted successfully!", {
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

      const handleEdit = () => {
        setCurrentProductId(jewel.product_id)
        toast.success("Please edit the product from the form above.", {
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

    return (
        <div>
        <Card className={classes.card} raised elevation={10}>
                <CardMedia className={classes.media} image={ring1} title={"Aayushi"} />
            
                <Typography variant="h6" color="textPrimary" align='center' component="p">{jewel.product_name}</Typography>
        
                <CardContent>
                    <Typography variant="body1" align='center' color="textSecondary" component="p">C$ {jewel.product_price}</Typography>
                </CardContent>
        

            <CardActions className={classes.cardActions}>
                
                <Button color='primary' size="medium" onClick={handleEdit}>
                    <EditIcon fontSize="medium" />
                    Edit
                </Button>
                

                <Button color='primary' size="medium" onClick={handleClickOpen}>
                    <DeleteIcon fontSize="medium" />
                    Delete
                </Button>
            </CardActions>
        </Card>

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">

            <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete this product?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Please press yes to delete the product and press no to cancel this action
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleDelete} autoFocus>
                Yes
            </Button>
            <Button onClick={handleClose} autoFocus>
                No
            </Button>
            </DialogActions>
        </Dialog>

        <ToastContainer />
    </div>         
    );
}

export default Jewel;