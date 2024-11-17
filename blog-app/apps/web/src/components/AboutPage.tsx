import { Box, Heading, Text } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <Box textAlign="center" p={10}>
      <Heading>About Us</Heading>
      <Text mt={4}>
        We are a team of passionate developers creating awesome content for you.
      </Text>
    </Box>
  );
};

export default AboutPage;
