import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";
import "./style.css";
export default function CustomDatePicker({value,setValue}) {
  // const [value, setValue] = useState(new Date());

  return (
    <div className="custom-date-picker">
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
