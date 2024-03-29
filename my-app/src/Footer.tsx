import React from "react";

import { Button, Fab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  button: {
    marginRight: "10px",
  },
});

interface IFooterButton {
  text: string;
  onClick: () => void;
}
interface IFooterProps {
  primary: IFooterButton;
  secondary: IFooterButton;
  teritary: IFooterButton;
}
export default function Footer(props: IFooterProps) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Fab
        onClick={props.primary.onClick}
        variant="extended"
        color="primary"
        type="submit"
        className={classes.button}
      >
        {props.primary.text}
      </Fab>
      <Fab
        onClick={props.secondary.onClick}
        variant="extended"
        color="secondary"
        className={classes.button}
      >
        {props.secondary.text}
      </Fab>
      <Fab
        onClick={props.teritary.onClick}
        variant="extended"
        className={classes.button}
      >
        {props.teritary.text}
      </Fab>
    </div>
  );
}
