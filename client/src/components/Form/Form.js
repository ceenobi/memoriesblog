import React, { useState, useEffect } from 'react'
import {
  Heading,
  Button,
  Textarea,
  Input,
  FormControl,
  Box,
  Stack,
} from '@chakra-ui/react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'

import { createPost, updatePost } from '../../actions/posts'

export default function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  })
  const post = useSelector((state)=> currentId ? state.posts.find((p)=> p._id === currentId) : null)
  const dispatch = useDispatch()


  useEffect(()=> {
    if(post) {
      setPostData(post)
    }
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))
    }
    clear()
  }

  const clear = () => {
    setCurrentId(null)
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    })
  }

  return (
    <Box
      p={6}
      borderWidth={1}
      borderRadius={8}
      boxShadow='lg'
      maxW='sm'
      mx='auto'
      align='center'
    >
      <Heading size='md' p='2' py='0' textAlign='center'>
        {currentId ? 'Edit' : 'Create'} a memory
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl padding='2' py='0'>
          <Input
            placeholder='creator'
            name='creator'
            mb='5'
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <Input
            placeholder='title'
            name='title'
            mb='5'
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <Textarea
            placeholder='message'
            name='message'
            mb='2'
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <Textarea
            placeholder='tags'
            name='tags'
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
          /> 
          <Box mt='2'>
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </Box>
        </FormControl>
        <Stack direction='column' spacing={4} paddingTop='4'>
          <Button colorScheme='teal' type='submit'>
            Submit
          </Button>
          <Button colorScheme='blue' onClick={clear}>
            Clear
          </Button>
        </Stack>
      </form>
    </Box>
  )
}
