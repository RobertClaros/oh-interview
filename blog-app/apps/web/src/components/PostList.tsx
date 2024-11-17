import { Box, Heading, Text, Button, Image, Stack, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { posts as initialPosts } from '../data/posts';

const PostList = () => {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <Box textAlign="center" py="8" px="4">
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {posts.map((post) => (
          <Box
            key={post.id}
            maxW="sm"
            bg="gray.800"
            borderRadius="md"
            overflow="hidden"
            boxShadow="lg"
          >
            <Image
              src={`/${post.image}`}
              alt={post.title}
              objectFit="cover"
              height="200px"
              width="100%"
            />
            <Stack mt="4" spacing="3" p="4">
              <Heading size="md">{post.title}</Heading>
              <Text fontSize="sm" mt="3" color="gray.300">
                {post.description}
              </Text>
              <Text fontSize="xs" color="gray.500">
                By {post.author} on {post.date}
              </Text>
              <Link to={`/post/${post.id}`}>
                <Button colorScheme="teal" variant="solid" mt="3">
                  Read More
                </Button>
              </Link>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PostList;
