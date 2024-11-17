import { Box, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <HStack spacing={8}>
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
          Home
        </Link>
        <Link as={RouterLink} to="/posts" color="white" fontWeight="bold">
          Posts
        </Link>
        <Link as={RouterLink} to="/about" color="white" fontWeight="bold">
          About
        </Link>
      </HStack>
    </Box>
  );
};

export default Navbar;
