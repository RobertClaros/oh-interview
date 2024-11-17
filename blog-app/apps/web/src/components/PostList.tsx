import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

const PostList = () => (
  <VStack spacing={4}>
    {posts.map((post) => (
      <Box key={post.id} borderWidth="1px" borderRadius="md" p={4}>
        <Heading size="md">{post.title}</Heading>
        <Text>{post.description}</Text>
        <Link to={`/post/${post.id}`}>
          <Button mt={2}>Read More</Button>
        </Link>
      </Box>
    ))}
  </VStack>
);

export default PostList;

