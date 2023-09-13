import { Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Login from "./components/Login";
import LogoutMessage from "./components/LogoutMessage";

import Protected from "./components/Protected";
import CreateBlogEntry from "./components/CreateBlogEntry";
import Dashboard from "./components/Dashboard";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600, // Adjust these values as needed
      md: 960, // Adjust these values as needed
      lg: 1280, // Adjust these values as needed
      xl: 1920, // Adjust these values as needed
    },
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<LogoutMessage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/" element={<Landing />}></Route>
          <Route path="/:userid" element={<Protected/>}>
            <Route path="create-blog" element={<CreateBlogEntry />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}
