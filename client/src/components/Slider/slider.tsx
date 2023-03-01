import React from "react";
import { Typography } from "@mui/material";
import { SliderThumb } from "@mui/material/Slider";
import useStyles, { StyledSlider } from "./styles";
import { Box } from "@material-ui/core";
import SliderButton from "assets/SliderButton.png";

export interface MLSliderProps {
  labelId?: string;
  defaultValue?: string;
  name?: string;
  value?: number;
  value1Check?: string;
  value2Check?: string;
  title?: string;
  handleChange?: any;
}

export type ThumbComponentProps = React.HTMLAttributes<unknown>;

const MLSlider: React.FC<MLSliderProps> = ({ ...Props }) => {
  const classes = useStyles();

  const valueLabelFormat = (value: number) => {
    return `${value} ${"Km"}`;
  };

  const ThumbComponent = (props: ThumbComponentProps) => {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <img src={SliderButton} />
      </SliderThumb>
    );
  };

  return (
    <>
      <Typography
        fontFamily="'NotoSans-Bold', Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontSize="12px"
        color="#75787B"
        paddingBottom="60px"
        paddingTop="40px"
      >
        {Props.title}
      </Typography>
      <StyledSlider
        value={Props.value}
        onChange={Props.handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        components={{ Thumb: ThumbComponent }}
        min={1}
        max={20}
      />
      <Box className={classes.container}>
        <Typography
          fontFamily="'CircularPro', Arial, Helvetica, sans-serif"
          fontWeight="bold"
          fontSize="14px"
          color="#333333"
          paddingTop="10px"
        >
          1 Km
        </Typography>
        <Typography
          fontFamily="'CircularPro', Arial, Helvetica, sans-serif"
          fontWeight="bold"
          fontSize="14px"
          color="#333333"
          paddingTop="10px"
        >
          20 Km
        </Typography>
      </Box>
    </>
  );
};

export default MLSlider;
