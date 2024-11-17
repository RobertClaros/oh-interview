import { Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const LandingPage = () => {
  return (

        <Link as={RouterLink} to="/posts">
        <Image
          src="/landing.png" 
        />
      </Link>
        
  );
};

export default LandingPage;
