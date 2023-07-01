import React from 'react'
import Post from './Post/Post'
import {Box, Spinner, Grid} from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export default function Posts({setCurrentId}) {
  const posts = useSelector((state) => state.posts)
  
  console.log(posts);
 
  return (
    <>
      {!posts.length ? (
        <Spinner />
      ) : (
        <Box maxW={['sm', 'md', 'lg', 'xl']}>
          {posts.map((post) => (
            <Grid
              templateColumns={{
                sm: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(2, 1fr)',
                xl: 'repeat(2, 1fr)',
                base: 'repeat(1, 1fr)',
              }}
              gap={6}
              key={post._id}
            >
              <Post post={post} setCurrentId={setCurrentId}/>
            </Grid>
          ))}
        </Box>
      )}
    </>
  )
}
