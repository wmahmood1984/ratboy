import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useContext, useState } from "react";
import "./style.css";
import { ThemeContext } from "../../../context/themeContext";
export default function CustomDatePicker({value,setValue}) {
  const { theme } = useContext(ThemeContext);
  // const [value, setValue] = useState(new Date());

  return (
    <div className={`${theme === "dark" && "custom-date-picker"} `}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
