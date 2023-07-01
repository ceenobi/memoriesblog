import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {getPosts} from './actions/posts'
import Navbar from './components/Navbar/Navbar'
import { Box, Grid, Container} from '@chakra-ui/react'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

function App() {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Box>
      <Navbar />
      <Container maxW='container.xl'>
        <Box mx='auto' my='4' mt='10'>
          <Grid
            templateColumns={{
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)',
              xl: 'repeat(2, 1fr)',
              base: 'repeat(1, 1fr)',
            }}
            gap={6}
          >
            <Box>
              <Posts setCurrentId={setCurrentId} />
            </Box>
            <Box>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default App
