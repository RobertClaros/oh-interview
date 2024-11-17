import { Box, Heading, Text, Button, Image, Flex, Stack } from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { posts as initialPosts } from "../data/posts";

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<null | typeof initialPosts[0]>(null);

  useEffect(() => {
    const foundPost = initialPosts.find((p) => p.id === Number(id));
    setPost(foundPost || null);
  }, [id]);

  if (!post) return <Text textAlign="center" mt={10}>Post not found</Text>;

  return (
    <Box p={10}>
      <Flex direction={{ base: "column", md: "row" }} align="center">
        <Image
          src={`/${post.image}`}
          alt={post.title}
          objectFit="cover"
          height={{ base: "200px", md: "300px" }}
          width={{ base: "100%", md: "50%" }}
          borderRadius="md"
          mr={{ md: 8 }}
          mb={{ base: 6, md: 0 }}
        />

        <Stack spacing={5} flex="1">
          <Heading size="lg">{post.title}</Heading>
          <Text fontSize="lg" color="gray.500">
            By {post.author} on {post.date}
          </Text>
          <Text fontSize="md">{post.content}</Text>
          <Box textAlign="center" mt={8}>
            <Button 
              as={RouterLink} 
              to="/posts" 
              colorScheme="teal" 
              size="lg"
            >
              Back to List
            </Button>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default PostDetails;
