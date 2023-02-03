import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const CustomSelect = ({ list, id, label, value, setValue }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={` ${theme === "dark" ? "custom-select" : ""}`}>
      <FormControl size="small" fullWidth>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId={id}
          // id="demo-simple-select"
          value={value}
          label={label}
          onChange={(e) => setValue(e.target.value)}
        >
          {list.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
