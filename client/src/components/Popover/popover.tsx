import React, { useState } from "react";
import { Box } from "@material-ui/core";
import useStyles from "./styles";

export interface PopoverProps {
  /** Defines the label* */
  title: string;
  /** Defines the label* */
  description: string;
  /** set ID */
  id?: string;
}
export const Popover: React.FC<PopoverProps> = ({
  title = "title",
  description = "description",
  ...Props
}) => {
  const classes = useStyles();
  const [openDescription, setOpenDescription] = useState(false);

  const onClickValue = () => {
    if (!openDescription) {
      setOpenDescription(true);
    } else {
      setOpenDescription(false);
    }
  };

  return (
    <Box className={classes.container}>
      <Box
        className={classes.title}
        id={Props.id}
        onClick={() => onClickValue()}
      >
        <u>{title}</u>
      </Box>
      {openDescription && (
        <Box className={classes.ctnDescription}>
          <Box className={classes.description}>{description}</Box>
        </Box>
      )}
    </Box>
  );
};
