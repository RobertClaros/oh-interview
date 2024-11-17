import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <Box textAlign="center" p={10}>
      <Heading>Welcome to Our Blog</Heading>
      <Text mt={4}>
        Discover the latest posts and updates on our platform.
      </Text>
      
  
      <Button 
        as={RouterLink} 
        to="/posts" 
        colorScheme="teal" 
        mt={6} 
        size="lg"
      >
        Get Started
      </Button>
    </Box>
  );
};

export default LandingPage;
