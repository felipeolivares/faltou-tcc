import React from "react";
import FormControl from "@mui/material/FormControl";
import {
  FormControlLabel,
  RadioGroup,
  Typography,
  Checkbox,
} from "@mui/material";

export interface CheckboxProps {
  labelId?: string;
  defaultValue?: string;
  name?: string;
  value?: string;
  value1Check?: string;
  value2Check?: string;
  title?: string;
  handleChange?: any;
}

const MLCheckbox: React.FC<CheckboxProps> = ({ ...Props }) => {
  return (
    <FormControl>
      <Typography
        fontFamily="'NotoSans-Bold', Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontSize="12px"
        color="#75787B"
        paddingBottom="20px"
      >
        {Props.title}
      </Typography>
      <RadioGroup
        aria-labelledby={Props.labelId}
        defaultValue={Props.defaultValue}
        name={Props.name}
        value={Props.value}
        onChange={Props.handleChange}
      >
        <FormControlLabel
          value={Props.value1Check}
          control={<Checkbox />}
          label={
            <Typography
              fontFamily="'NotoSans', Arial, Helvetica, sans-serif"
              fontSize="14px"
              color="#333333"
            >
              {Props.value1Check}
            </Typography>
          }
        />
        <FormControlLabel
          value={Props.value2Check}
          control={<Checkbox />}
          label={
            <Typography
              fontFamily="'NotoSans', Arial, Helvetica, sans-serif"
              fontSize="14px"
              color="#333333"
            >
              {Props.value2Check}
            </Typography>
          }
        />
      </RadioGroup>
    </FormControl>
  );
};

export default MLCheckbox;
