import React from "react";
import { DialogContent, Card, CardHeader, CardMedia, CardActions } from "@mui/material";
import { Close } from "@mui/icons-material";
import image1 from "../../Assets/Images/aventure02.webp";

function ImageModal({openPreview}) {
  return (
    // <DialogContent>
      <Card>
        <CardActions><Close sx={{background : "red" , color : "white", borderRadius : "50%", padding : "5px"}} onClick={()=>openPreview(false)}/></CardActions>
        <CardMedia>
          <img src={image1} alt="detailsImage" />
        </CardMedia>
      </Card>
    // </DialogContent>
  );
}

export default ImageModal;
