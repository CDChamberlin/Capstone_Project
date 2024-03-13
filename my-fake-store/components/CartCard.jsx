import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

  export default function CartCard({ name, image, description, price }){
    
    return (
        <Card sx={{ maxWidth: 400, marginY: 2}}>
      <CardMedia
        component="img"
        alt={name}
        src={image}
        style={{ objectFit: "contain", height: "150px", width: "100%", maxWidth: "100%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2">$ {price}</Typography>
      </CardContent>
      <CardActions>
          <Link href="#">
        <Button size="small">Product Page</Button>
        </Link>
      </CardActions>
    </Card>
    )
  }