import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const NoteCard = (props) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2">
            {props.note}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
