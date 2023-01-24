import "./App.css";
import Home from "./pages/home";
import CreateToken from "./pages/createToken";
import ProjectPreview from "./pages/projectPreview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import Locktoken from "./pages/LockToken";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#824CF4",
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
        
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="createToken" element={<CreateToken />} />
          <Route path="preview" element={<ProjectPreview />} />
          <Route path="lockToken" element={<Locktoken />} />
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
