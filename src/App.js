import "./App.css";
import Home from "./pages/home";
import CreateToken from "./pages/createToken";
import ProjectPreview from "./pages/projectPreview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import Locktoken from "./pages/LockToken";
import Landing from "./pages/createToken/landing";
import { Toaster } from "react-hot-toast";

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
    <Toaster containerClassName="text-sm z-[999999999]" />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="createPresale" element={<CreateToken />} />
          <Route path="preview" element={<ProjectPreview />} />
          <Route path="lockToken" element={<Locktoken />} />
          <Route path="landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
