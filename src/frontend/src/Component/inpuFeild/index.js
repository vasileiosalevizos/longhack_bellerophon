import { InputAdornment, TextField } from "@mui/material";
import "../../index.css";

const AppInputFields = ({
  color,
  fontSize,
  fontWeight,
  lineHeight,
  padding,
  placeholder,
  margin,
  width,
  border,
  borderRadius,
  className,
  inputIcon,
  position,
  checkMultiLine,
  maxRows,
  alignItems,
  onChange,
  colorP,
  value,
  name,
  backgroundColor,
  height,
  type,
  ref,
}) => {
  return (
    <>
      <TextField
        sx={{
          borderRadius: borderRadius || "0px",
          backgroundColor: backgroundColor || "#161616",
          width: width || "100%",
          height: height,
          
          fontFamily: "Inter !impoprtant",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          border: border,
          margin: margin,
          fontSize: fontSize || "16px",
          // padding: padding || "12px 16px",
          fontWeight: fontWeight || "400",
          lineHeight: lineHeight || "24px",
          "&:hover": {
            // border: "none",
            backgroundColor: "",
            color: "blue",
          },
          " & .MuiOutlinedInput-notchedOutline": {
            border: " none !important",
          },
          "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            color: color || "#848484",

            // margin:margin,
          },
          "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:hover": {
            color: "#717171",
          },
          "& .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: padding || "16.5px 14px !important",
            color:"black",

          },
          "& .css-111avd1-MuiInputBase-root-MuiOutlinedInput-root": {
            height: height,
            alignItems: alignItems,
          },
          input: {
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              color:  "black",
            },
          },
        }}
        placeholder={placeholder}
        fullWidth
        // style={{ padding: padding}}
        className={className}
        InputProps={{
          startAdornment: (
            <InputAdornment position={"start" || position}>
              {inputIcon}
            </InputAdornment>
          ),
        }}
        multiline={checkMultiLine ? true : false}
        maxRows={maxRows}
        onChange={onChange}
        value={value}
        type={type}
        ref={ref}
        name={name}
        // disabled= {disabled ? disabled : ""}
      />
    </>
  );
};

export default AppInputFields;
