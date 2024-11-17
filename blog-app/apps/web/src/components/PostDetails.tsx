import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { posts } from "../data/posts";

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <Text>Post not found</Text>;

  return (
    <Box textAlign="center" p={10}>
      <Heading>{post.title}</Heading>
      <Text mt={4}>By {post.author} on {post.date}</Text>
      <Text mt={6}>{post.content}</Text>

      <Button 
        as={RouterLink} 
        to="/posts" 
        colorScheme="teal" 
        mt={8}
      >
        Back to List
      </Button>
    </Box>
  );
};

export default PostDetails;
