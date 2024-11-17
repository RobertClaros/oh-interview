import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";

export default function App() {
  return (
    <Router>
      <Box textAlign="center" fontSize="xl" pt="10vh">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Box>
    </Router>
  );
}
