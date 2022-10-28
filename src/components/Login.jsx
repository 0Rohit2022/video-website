import { Button, Container, Heading, Input, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
                <form>
                    <VStack alignItems={"stretch"} spacing={"8"} w={["full", "96"]} m={"auto"} my={"16"}>
                        <Heading>Welcome Back</Heading>
                        <Input placeholder='Please type email here' type={"email"} required focusBorderColor='telegram.500'></Input>
                        <Input placeholder={'Enter your password'} type={"password"} required focusBorderColor='telegram.500'></Input>

                        <Button variant={"link"} alignSelf={"flex-end"}>
                            <Link to={"/forgetpassword"}>Forget Password? </Link>
                        </Button>
                        <Button colorScheme={"telegram"} type={"submit"}>LOGIN</Button>

                        <Text textAlign={"right"}>New User?{' '}
                            <Button variant={"link"} colorScheme={"telegram"}>
                            <Link to={"/signup"}>Signup</Link>

                            </Button>
                        </Text>

                    </VStack>
                </form>

            </Container>
        </>
    )
}

export default Login