import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox(props) {
  return (
    <Card className="infoBox">
      <CardContent>
        {" "}
        <Typography className="infoBox_title" color="textSecondary">
          {props.title}
        </Typography>
        <h2 className="infoBox_cases">{props.cases}</h2>
        <Typography className=" infoBox_total" color="textSecondary">
          {props.total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
