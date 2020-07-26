import React from "react";
import { Card, CardContent, Typography, Table } from "@material-ui/core";

function InfoBox(props) {
  return (
    <Card className="infoBox">
      <CardContent>
        {" "}
        <Typography color="textSecondary">{props.title}</Typography>
        <h2 className="infoBox_title">{props.cases}</h2>
        <Typography className=" infoBox_total" color="textSecondary">
          {props.total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
