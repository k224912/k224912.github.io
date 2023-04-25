import React, { useEffect } from 'react'
import Tabss from "../homepageelements/Tabss";
import {Container,
        Box,
        Text,
} from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';

const Homepage = () => {
  //to make sure user goes to home page
    const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return( 
   <Container maxW = '600px' centerContent>
      <Box
        display='flex'
        justifyContent='center'
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="1g"
        borderWidth="1px"
      >
          <Text fontSize="4xl" fontFamily='worksans' color="black" textAlign='center'>Chatty</Text>
      </Box >
      <Box  bg="white" w="100%" p= {4} borderRadius="1g" borderWidth="1px">
        <Tabss />
      </Box>
   </Container>
  )
}

export default Homepage
