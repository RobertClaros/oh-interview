import { Box, HStack, Link, Image  } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box bg="gray.700" >

      <HStack justify="space-between">
      
      <Link as={RouterLink} to="/">
        <Image
          src="/BH.png"
          alt="Navbar Logo"
          boxSize="80px" 
        />
      </Link>

        <HStack >
          <Link as={RouterLink} to="/posts">
            Posts
          </Link>
          <Link as={RouterLink} to="/about">
            About
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
}
