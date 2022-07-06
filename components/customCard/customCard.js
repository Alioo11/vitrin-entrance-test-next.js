import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

const CustomCard = ({ post }) => {
  console.log(post);
  return (
    <Card sx={{ minWidth: 275, minHeight: 200 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {post.title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {post.body.slice(0, 85)} ...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
