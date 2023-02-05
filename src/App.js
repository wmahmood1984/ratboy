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
import TokenList from "./pages/TokenList";
import LockDetails from "./pages/LockDetails";

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
      <Toaster
        containerStyle={{
          position: "relative",
          top: "50px",
        }}
        toastOptions={{
          className: 'text-sm z-[999999999]" ',
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="createPresale" element={<CreateToken />} />
          <Route path="preview" element={<ProjectPreview />} />
          <Route path="lockToken" element={<Locktoken />} />
          <Route path="landing" element={<Landing />} />
          <Route path="token_list" element={<TokenList />} />
          <Route path="token_list/details" element={<LockDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
