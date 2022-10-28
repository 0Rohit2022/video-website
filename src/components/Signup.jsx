import { Container, VStack ,Input,Button, Text, Link, Heading, Avatar} from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
  return (
   <>
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        <form>
            <VStack alignItems={"stretch"} spacing={"8"} w={["full", "96"]} m={"auto"} my={"16"}>
            <Heading textAlign={"center"}>VIDEO HUB</Heading>
            <Avatar alignSelf={"center"} boxSize={"32"}/>
                    <Input placeholder={"Enter your name here"} type={"text"} required focusBorderColor={"telegram.500"}></Input>
                     <Input placeholder='Please type email here' type={"email"} required focusBorderColor='telegram.500'></Input>
                     <Input placeholder={'Enter your password'} type={"password"} required focusBorderColor='telegram.500'></Input>



                     
                        <Button colorScheme={"telegram"} type={"submit"}>SIGNUP</Button>

                        <Text textAlign={"right"}>Already Signed Up?{' '}
                            <Button variant={"link"} colorScheme={"telegram"}>
                            <Link to={"/login"}>Login In</Link>

                            </Button>
                        </Text>
            
            
            
            </VStack>
        </form>
    </Container>
   </>
  )
}

export default Signup