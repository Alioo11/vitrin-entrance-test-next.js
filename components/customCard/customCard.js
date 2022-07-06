import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const CustomCard = ({ post }) => {
  return (
    <Card sx={{ minWidth: 275, height: 200 }}>
      <CardContent sx={{ height: 70 }}>
        <Typography variant="h6" component="div">
          {post.title.slice(0, 25)} ...
        </Typography>
      </CardContent>
      <CardContent sx={{ height: 80 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {post.body.slice(0, 85)} ...
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/posts/${post.id}`}>
          <Button>more</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
