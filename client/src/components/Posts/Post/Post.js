import React from 'react'
import {Box, Button, Text, Image} from '@chakra-ui/react'
import {BsFillHandThumbsUpFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import {FiMoreHorizontal} from 'react-icons/fi'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'

export default function Post({post, setCurrentId}) {
  const dispatch = useDispatch()
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='lg'
      mb='4'
      align='center'
    >
      <Box>
        <Image
          src={post.selectedFile}
          title={post.title}
          boxSize='120px'
          objectFit='cover'
        />
      </Box>

      <Box p='6'>
        <Text as='h6' alignItems='baseline'>
          {post.creator}
        </Text>
        <Box>{moment(post.createdAt).fromNow()}</Box>
        <Box mt='2'>
          <Button
            leftIcon={<FiMoreHorizontal />}
            colorScheme='teal'
            variant='solid'
            size='sm'
            onClick={() => setCurrentId(post._id)}
          />
        </Box>
        <Box mt='2'>
          <Box as='h6'>{post.tags.map((tag) => `#${tag} `)}</Box>
        </Box>
        <Text fontWeight='semibold' mt='2'>
          {post.title}
        </Text>
        <Text fontWeight='semibold' mt='2'>
          {post.message}
        </Text>
        <Box display='flex' justifyContent='space-between'>
          <Box>
            <Button
              leftIcon={<BsFillHandThumbsUpFill />}
              colorScheme='teal'
              variant='ghost'
              size='sm'
              onClick={() => dispatch(likePost(post._id))}
            >
              Like &nbsp;
              {post.likeCount}
            </Button>
          </Box>
          <Box>
            <Button
              leftIcon={<AiFillDelete />}
              colorScheme='teal'
              variant='ghost'
              as='span'
              size='sm'
              onClick={() => dispatch(deletePost(post._id))}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
